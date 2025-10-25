// Complete test script for contact form API
import fetch from "node-fetch";

const testContactAPI = async () => {
  const API_URL = "https://threed-portfolio-2-u9hw.onrender.com/api/contact";

  try {
    console.log("Testing API endpoint:", API_URL);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fullName: "Test User",
        title: "API Test",
        description: "Testing contact form API endpoint",
      }),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);

    const text = await response.text();
    console.log("Response body:", text);

    try {
      const data = JSON.parse(text);
      console.log("Parsed JSON:", data);
    } catch (e) {
      console.log("Could not parse response as JSON");
    }
  } catch (error) {
    console.error("Error testing API:", error);
  }
};

// Run the test
testContactAPI();
