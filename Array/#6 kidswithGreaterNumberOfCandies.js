// Given the array candies and the integer extraCandies, 
// where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids 
// such that he or she can have the greatest number of candies among them. 
// Notice that multiple kids can have the greatest number of candies.
//      Input: candies = [2,3,5,1,3], extraCandies = 3
//      Output: [true,true,true,false,true] 
//      Input: candies = [4,2,1,1,2], extraCandies = 1
//      Output: [true,false,false,false,false] 

let candies = [2,3,5,1,3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));

// Solution 01
 function kidsWithCandies(candies, extraCandies) {
    let max = Math.max(...candies);
    let sol = [];
    for(i=0;i<candies.length;i++) {
      sol.push( (candies[i]+extraCandies) >= max );
    }
    return sol;
 }

// Solution 02 both solutions are not much efficient
 function kidsWithCandies(candies, extraCandies) {
    return candies.map((v) => (v + extraCandies) >= Math.max(...candies));
 }