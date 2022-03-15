//Exercise 1
const { faker } = require('@faker-js/faker');
const user = faker.helpers.createCard();
const prompt = require('prompt');
const readline = require('readline')

let array = [];

let addUser = () => {
    array = Array.from({ length: 10 }, () => (user))
}
addUser()
//console.log(array);

readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let getPrompt = () => {
    prompt.start();
    prompt.get([
        {
            name: 'name',
            required: true
        }, {
            name: 'adress',
            required: true
        }, {
            name: 'city',
            required: true
        }, {
            name: 'zip',
            required: true
        }
    ], function (err, res) {
        if (res.name.indexOf(' ') > 0 && /^[A-Za-z\s]*$/.test(res.name)) {
            let user = {}
            user.name = res.name
            user.adress = res.adress
            user.city = res.city
            user.zip = res.zip
            array.push(user)
            console.log(array);
        } else {
            console.log('Problem in your username');
        }
    })
}
getPrompt()
/*
    console log the line 12 before start the function:
    getPrompt()
*/
//Exercise 2
let regex = /\d+/g;
let before = 'something102asdfkj1948948'
let after = 'something102asdfkj1948948'.match(regex).join('')
//console.log('REGEX:', { before, after });

//Exercise 3

