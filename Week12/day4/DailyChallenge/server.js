const express = require('express')
const app = express()
const _ = require("lodash")
const path = require('path');
const public = path.join(__dirname, 'public');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/pic", express.static(public))

app.get("/aboutMe/:hobby", (req, res) => {
    let hobby = req.params.hobby;
    if (_.isString(hobby) && isNaN(hobby)) {
        res.send(hobby)
    } else {
        req.statusCode = 404
    }
})

app.get("/", (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
})

app.get("/form", (req, res) => {
    res.sendFile(path.join(public, 'form.html'));
})

app.post("/formData", (req, res) => {
    res.send(req.body.email + " send you a message: '" + req.body.message + "'")
})






app.listen(8000)  