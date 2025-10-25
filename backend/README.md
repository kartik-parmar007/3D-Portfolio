# Backend API for TechSculptor Portfolio

This is the backend API for the portfolio contact form, built with Node.js, Express, and MongoDB.

## Deployed URL

The backend is deployed at: https://threed-portfolio-2-u9hw.onrender.com

## Issue Fixed

There was a deployment issue where the `ip-address` module (a dependency of mongoose) was missing its built distribution files, causing the error:

```
Error: Cannot find module '/opt/render/project/src/backend/node_modules/ip-address/dist/ip-address.js'
```

## Solution Implemented

1. Added a setup script (`setup-ip-address.js`) that checks if the `ip-address` module has its required `dist` folder
2. If the `dist` folder is missing, the script attempts to build it
3. Updated package.json scripts to run this setup before starting the server
4. Added error handling to prevent the application from crashing if the build fails

## Scripts

- `npm start` - Start the production server (runs setup first)
- `npm run dev` - Start the development server with nodemon (runs setup first)
- `npm install` - Install dependencies (runs setup as postinstall script)

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
```

## API Endpoints

- `GET /` - Health check endpoint
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

## Troubleshooting

If you encounter the ip-address module error:
1. Ensure all dependencies are installed: `npm install`
2. Check if the `node_modules/ip-address/dist` folder exists
3. If it doesn't exist, the setup script should automatically create it
4. If issues persist, try manually rebuilding: `cd node_modules/ip-address && npm run build`