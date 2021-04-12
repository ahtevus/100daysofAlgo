// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
//      Input: nums = [2,7,11,15], target = 9
//      Output: [0,1]
//      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Solution 01 - creating a complement and checking using a hash while inserting.
let nums = [2,7,11,15]
let target = 9;

function twoSum(nums, target) {
    let comp = {};
    for(i=0; i<nums.length; i++) {
        if(comp[target - nums[i]] >= 0) {     //because index is greater than 0 always
            return [comp[target - nums[i]], i];
        }
        else {
            comp[nums[i]] = i;  //inserting a new hash element with key = array element, value = index of array
        }
    }
};

console.log(twoSum(nums,target));