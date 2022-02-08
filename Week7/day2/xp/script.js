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