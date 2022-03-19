const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

let data = [];
app.post('/api', (req, res) => {
    // reading writeFile
    try {
        let list = fs.readFileSync("./list.json", "utf-8");
        list = list.toString();
        if (list.length != 0) {
            // parse the json file
            data = JSON.parse(list);
        }
    } catch (error) {
        console.log(error.message);
    }

    // push body into global array
    data.push(req.body);

    // write to file the data array
    fs.writeFile('./list.json', JSON.stringify(data), (err) => {
        if (err) {
            // response with the error
            res.json({ message: error.message })
        }
        else {
            // response with data json file
            res.json(data)
        }
    })
})

app.listen(5000, () => {
    console.log('listen on port 5000');
})
