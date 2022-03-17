const items = [
    {
        "id": 1,
        "item": "Mercedes Class S",
        "brand": "Mercedes",
        "price": 300000
    },
    {
        "id": 2,
        "item": "Lamborghini Urus",
        "brand": "Lamborghini",
        "price": 412000
    },
    {
        "id": 3,
        "item": "Tesla Model X",
        "brand": "Tesla",
        "price": 221000
    },
    {
        "id": 4,
        "item": "Range-Rover Evoque",
        "brand": "Range-Rover",
        "price": 324000
    },
    {
        "id": 5,
        "item": "Audi R8",
        "brand": "Audi",
        "price": 158000
    }
]

items.forEach((e) => {
    console.log(e);
    let ul = document.getElementById('item-list')
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(JSON.stringify(e)))
    ul.appendChild(li)
})