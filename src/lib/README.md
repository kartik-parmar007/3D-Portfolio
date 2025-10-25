# API Utilities

This directory contains utility functions and configuration for making API requests in the TechSculptor portfolio.

## Files

- `api.ts` - Contains functions for determining API base URLs and constructing endpoint URLs
- `api.test.ts` - Tests for the API utility functions

## Configuration

The API base URL is determined automatically based on the environment:

- **Development**: `http://localhost:5001`
- **Production**: `https://threed-portfolio-2-u9hw.onrender.com`

## Usage

```typescript
import { getApiUrl, API_ENDPOINTS } from '@/lib/api';

// Get the full URL for the contact endpoint
const contactUrl = getApiUrl(API_ENDPOINTS.CONTACT);

// Make a request
fetch(contactUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
```

## Adding New Endpoints

To add a new API endpoint:

1. Add the endpoint path to the `API_ENDPOINTS` constant in `api.ts`
2. Update the `site.ts` configuration file in `src/config/` to include the new endpoint
3. Use the utility functions to construct the full URL in your components