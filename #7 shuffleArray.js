// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//      Input: nums = [2,5,1,3,4,7], n = 3
//      Output: [2,3,5,4,1,7] 
//      Input: nums = [1,1,2,2], n = 2
//      Output: [1,2,1,2]

let nums = [2,5,1,3,4,7];
let n =3;
console.log(shuffle(nums,n));

// Solution 01
// function shuffle(nums, n) {
//     let out=[];
//     for(i=0;i<nums.length/2;i++) {
//         out.push(nums[i]);
//         out.push(nums[i+n]);
//     }
//     return out;
// };

//Solution 2

function shuffle(nums, n) {
    console.log(nums.map((x, i) => i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2]));
}