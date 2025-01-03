/*
    Creates a basic web server using the Express.js framework in Node.js
*/

// Import
const express = require('express');

// Define port
const port = process.env.PORT || 3000;

// Initialize instace of Express app
const app = express();

/* 
    Defines routes for HTTP GET Requests
*/
app.get('/', (req,res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/about', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Justin</h1>");
});

app.get('/queen/:id', (req,res) => {

    var queen = req.params.id;

    if (queen == 1) {
        res.send("Jinkx: <img src='/Jinkx.webp' style='width:250px;'>");
    }
    else if (queen == 2) {
        res.send("Marina: <img src='/Marina.webp' style='width:250px;'>");
    }
    else if (queen == 3) {
        res.send("Nymphia: <img src='/Nymphia.webp' style='width:250px;'>");
    }
    else if (queen == 4) {
        res.send("Sasha: <img src='/Sasha.webp' style='width:250px;'>");
    }
    else {
        res.send("Invalid Queen id: "+queen);
    }
});


app.use(express.static(__dirname + "/public"));

/*
    Starts the server and listens for requests on the port
*/
app.listen(port, () => {
    console.log("Node application listening on port "+port);
}); 