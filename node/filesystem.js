const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json()); // Middleware to parse JSON data

// Middleware to compute sum and write to a file
const sumAndSaveMiddleware = (req, res, next) => {
  const { value1, value2 } = req.body;

  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return res.status(400).json({ error: 'Please provide two numbers' });
  }

  const sum = value1 + value2;
  const dirPath = path.join(__dirname, 'results'); // Directory to save the file
  const filePath = path.join(dirPath, 'sum.txt');  // File to write the sum

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Write the sum to the file
  fs.writeFile(filePath, `Sum of ${value1} and ${value2} is ${sum}`, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error writing to file' });
    }
    console.log('File written successfully');
    next(); // Pass control to the next middleware or route handler
  });
};

// Route that uses the middleware
app.post('/compute-sum', sumAndSaveMiddleware, (req, res) => {
  res.status(200).json({ message: 'Sum computed and saved to file!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
