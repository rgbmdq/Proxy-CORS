const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;
const url = "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes"

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy GET requests
app.get('/proxy', async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Forward the response from the target server
    console.log('Response:', response);
    console.log('Data:', data);
    res.send(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error occurred while fetching data');
  }
});

// Proxy POST requests
app.post('/proxy', async (req, res) => {
  try {
   
    console.log("req", req.body)
    console.log("url", url)
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    console.log("response", data)

    // Forward the response from the target server
    console.log('Response:', response);
    console.log('Data:', data);
    res.send(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error occurred while proxying the request');
  }
});

app.listen(port, () => {
  console.log(`CORS proxy server listening at http://localhost:${port}`);
});
