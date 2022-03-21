//Exercise 1
const fs = require("fs")
//Create file text.txt
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

//Exercise 2
let newContent = "Text content"
//Create file if not exists and adding text 
fs.appendFile('menu.txt', newContent + '\n', (err) => {
    if (err) {
        console.error(err)
        return
    }
});
//Delete the file
fs.unlink('menu.txt', function (err) {
    console.log('file deleted');
});   
