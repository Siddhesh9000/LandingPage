const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

// Serve static files from the project root directory
app.use(express.static(path.join(__dirname)));

// Route for serving the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
