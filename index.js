/*
    Creates a basic web server using the Express.js framework in Node.js
*/

// Import
const express = require('express');

// Define port
const port = process.env.PORT || 3000;

// Initialize instace of Express app
const app = express();

// Defines route for HTTP GET Requests
app.get('/', (req,res) => {
    res.send("<h1>Hello World!</h1>");
});

// Starts the server and listens for incoming requests on the specified port
app.listen(port, () => {
    console.log("Node application listening on port "+port);
}); 