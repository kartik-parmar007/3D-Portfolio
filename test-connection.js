// Simple Node.js script to test API connection
async function testConnection() {
  try {
    console.log('Testing connection to backend API...');
    
    // Test the deployed API
    const prodResponse = await fetch('https://threed-portfolio-2-u9hw.onrender.com/api/contact');
    console.log('Production API status:', prodResponse.status);
    
    // Test the local development API
    const devResponse = await fetch('http://localhost:5001/api/contact');
    console.log('Development API status:', devResponse.status);
    
    if (devResponse.ok) {
      const data = await devResponse.json();
      console.log('Development API data:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error('Connection test failed:', error.message);
  }
}

testConnection();