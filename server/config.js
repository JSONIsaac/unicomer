
const 
    express = require("express"),
    bodyParser = require("body-parser"),
    //midleware
    jsonParser = bodyParser.json()
    app = express(),
    // General Settings
    PORT = 8000
;

app.use(jsonParser);


module.exports = { express, app, PORT }