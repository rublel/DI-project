const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

let Parser = require('rss-parser');
let parser = new Parser();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get("/", (req, res) => {
    let arr = [];
    (async () => {

        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        feed.items.forEach(item => {
            arr.push(item)
            console.log(item);
        });
        res.render('pages/index', {
            data: arr,
            option: ''
        })
    })();
})
app.get("/search", (req, res) => {

    let arr = [];
    (async () => {
        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        feed.items.forEach(item => {
            arr.push(item)
        });
        res.render('pages/search', {
            data: arr,
            option: ''
        })
    })();
})

app.post("/search/title", (req, res) => {
    let title = req.body.title;
    let arr = [];
    (async () => {

        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        feed.items.forEach(item => {
            arr.push(item)
        });
        res.render('pages/search', {
            data: arr,
            option: title
        })
    })();
})

app.post("/search/category", (req, res) => {
    let category = req.body.category;
    let arr = [];
    (async () => {

        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        feed.items.forEach(item => {
            arr.push(item)
        });
        res.render('pages/search', {
            data: arr,
            option: category
        })
    })();
})


app.listen(8000)  