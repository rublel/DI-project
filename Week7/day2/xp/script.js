//EXERCISE 1
//------1------
const fruits = ["apple", "orange"]; //this is a simple array with 2 elements
const vegetables = ["carrot", "potato"];//this is a simple array with 2 elements

//destructuration of vegetables array and put it after 'bread'into a new array called results - idem for fruits
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//------2------
// country is a variable who contains a string with 3 letters
const country = "USA";
//generate an array where all letters of country became elements of the array
console.log([...country]);

//------Bonus------
//we dont have any values but its the same to write just the array and console log it 
let newArray = [...[,,]];
console.log(newArray);

//EXERCISE 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let sayHello = users.map(e=>console.log("Hello " + e.firstName))
let fullStack = users.filter(e=>e.role === "Full Stack Resident")
console.log(fullStack)

fullStack.map(e=>console.log("Good job " + e.firstName))

//EXERCISE 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']
const reducer = (prev, curr) => prev.split(' ').join('') + curr.split(' ').join('');
console.log(epic.reduce(reducer));

//EXERCISE 4

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
               
let passedCourse = student.filter(e=>e.isPassed)
console.log(passedCourse);
passedCourse.map(e=>console.log("Good job " + e.name + " you passed the course in " + e.course))


