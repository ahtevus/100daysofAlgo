//GRAMMAR

//to convert to integer, float
parseInt(), parseFloat()  
//to limit floating points to ’n’ digit
toFixed(n)  
//creating a new array with fixed length
const arr1 = new Array(10); 
//fill elements in array - only if the array has values or size has been declared
array.fill(largest,0,3); //fills - 0,1,2, total = 3-0
//to find the maximum in the given set or array
Math.max(5, 10);
Math.max(...array);



//TECHNIQUES

// while reversing an array, if we need to iterate only half of times of total elements 
// then we can iterate from both ends until one shoul dbe greate than other.
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