const express = require('express');
const cors = require('cors');
const path = require('path')
const helmet = require('helmet');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");


const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middlewear
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => res.json("Welcome to the Chuck Norris API"))

app.get('/api', (req, res) => {
    fetch('http://api.icndb.com/jokes/random/3')
        .then(res => res.json())
        .then(data => res.send(data))
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static('client/build'));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// Establish Port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`fun @ port: ${PORT}`))