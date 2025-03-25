const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Import responses from external file
const responses = require("./responses");

// API endpoint to get a random response
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    console.log("User said:", userMessage);
    
    // Pick a random response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    res.json({ reply: randomResponse });
});

app.listen(port, () => {
    console.log(`AI Fun Bot server running on http://localhost:${port}`);
});
