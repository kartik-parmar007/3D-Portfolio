// Test API connectivity
import { getApiBaseUrl, getApiUrl, API_ENDPOINTS } from './api';

async function testApiConnection() {
  console.log('Testing API connection...');
  console.log('API Base URL:', getApiBaseUrl());
  console.log('Contact Endpoint URL:', getApiUrl(API_ENDPOINTS.CONTACT));
  
  try {
    const response = await fetch(getApiUrl(API_ENDPOINTS.CONTACT), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Connection test result:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Response data:', data);
      console.log('✅ API connection successful!');
    } else {
      console.log('❌ API responded with error status:', response.status);
    }
  } catch (error) {
    console.error('❌ Connection test failed:', error);
  }
}

// Run the test
testApiConnection();