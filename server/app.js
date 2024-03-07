const express = require("express");
const cors = require("cors");

const app = express(); // Remove options from here
const port = process.env.PORT || 5000;

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000/',
  methods: ['GET', 'POST'],
}));

// Define routes
app.get("/api", (req, res) => {
  res.send(`Server is listening on port ${port}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});