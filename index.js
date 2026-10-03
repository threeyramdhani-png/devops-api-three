const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from devops-api-three',
    author: 'Three Ramdhani',
    version: '1.0.0'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});