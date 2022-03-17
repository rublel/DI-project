const express = require('express')
const app = express()
const path = require('path');
const public = path.join(__dirname, 'public');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/items", express.static(__dirname + '/public'))

app.listen(8001)  