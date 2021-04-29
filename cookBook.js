//GRAMMAR----------------------------------------------------------------------------------

//to convert to integer, float
parseInt(), parseFloat()  

//to limit floating points to ’n’ digit
toFixed(n)  

//creating a new array with fixed length
const arr1 = new Array(10); 

//fill elements in array - only if the array has values or size has been declared
array.fill(largest,0,3); //fills - 0,1,2, total = 3-0

//to find the maximum in the given set or array
Math.max(5, 10); //10
Math.max(...array);
Math.min(5,10); //5

//Array Map
//the map function doesnot apply changes to the original array
let array = [5,4,3,2,1];
array.map((e,i) => console.log(e,i));   //e = element, i = index


//OBJECTS
hash = { 'a': 1, 'b': 0, 'c': 1 };
console.log(Object.keys(hash));
console.log(Object.values(hash));

// looping an object
for(let [key,value] of Object.entries(hash)) {
    console.log(value);
}

//SPREAD OPERATOR
const nums = [8,1,2,2,3];
const sorted = nums.sort((a, b) => a - b);   //this will change the original array also
const sorted = [...nums].sort((a, b) => a - b); //this will only copy the elements & prevent changes in original array

//IndexOF
array.indexOf(element); //returns the index of only first occurrence

//REDUCE - below example gives output of 10 (4 internal operations)
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  })

// The splice() method adds/removes items to/from an array, and returns the removed item(s). 
// This method changes the original array.
// array.splice(index, howManytoRemove, item1, ....., itemX)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");


//Shift,Unshift <==> Push,Pop
// these method changes the original array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.shift(); //"Banana"


//Looping an Array
let array = [0,1,2,3,4,5];
for(let number of array) {
  console.log(number);
}