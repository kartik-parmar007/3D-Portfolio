// Test the deployed API
async function testDeployedApi() {
  try {
    console.log('Testing deployed API...');
    const response = await fetch('https://threed-portfolio-2-u9hw.onrender.com/api/contact');
    console.log('Deployed API Status:', response.status);
    console.log('Deployed API Headers:', [...response.headers.entries()]);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Deployed API Data (first 2 items):', JSON.stringify(data.slice(0, 2), null, 2));
    }
  } catch (error) {
    console.error('Error testing deployed API:', error.message);
  }
}

testDeployedApi();