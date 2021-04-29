// Given two arrays of integers nums and index. 
// Your task is to create target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// nums = [0,1,2,3,4], 
// index = [0,1,2,2,1]
// Output: [0,4,1,3,2]

// nums = [1,2,3,4,0], 
// index = [0,1,2,3,0]
// Output: [0,1,2,3,4]

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];

console.log(createTargetArray(nums,index));

//Solution 01
function createTargetArray(nums, index) {
    let len = nums.length;
    let ans = [];
    for(i=0;i<len;i++) {
        ans.splice(index[i], 0, nums[i]);
    }
    return ans;
};

//Solution 02
function createTargetArray(nums, index) {
    let ans = [];
    for(let number of nums) {
        let idx = index.shift();
        ans.splice(idx, 0, number);
    }
    return ans;
};