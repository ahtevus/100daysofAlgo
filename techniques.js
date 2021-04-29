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

//inorder to loop through an array once inside a for loop and don't need that - use array.shift()
let index = [0,1,2,2,3];
for(let number of nums){
    let idx = index.shift();
    result.splice(idx,0,number)
}