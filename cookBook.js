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
let array = [5,4,3,2,1];
array.map((e,i) => console.log(e,i));   //e = element, i = index
//the map function doesnot apply changes to the original array

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

//Reduce - below example gives output of 10 (4 internal operations)
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  })



//TECHNIQUES---------------------------------------------------------------------------------

// while reversing an array, if we need to iterate only half of times of total elements 
// then we can iterate from both ends until one should be greate than other.
let left = 0; right = array.length - 1;
while (left < right) { 
    /*does something only half of times - if array lenght is 5, it runs 2 times.*/
}

//compare function
function ascending(a, b){return a - b}
array.sort(ascending);
//When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

//sorting 2D array based on nth value -> [[1,2],[2,3],[5,4]]
array.sort((a, b) => b[n] - a[n]);
//for loop a 2D array to length
for (let [boxes, units] of array) { };

//Looping through an array with skipping adjacent element (odd,even)
//use (i%2===0) to fetch elements of indices 0,2,4,6,8...etc
//x = element, i = index
array.map((x, i) => (i % 2 === 0) ? console.log("odd") : console.log("even"));

//The sum of the first n naturals is simply 
n(n+1)/2  //5+4+3+2+1 = 15 

