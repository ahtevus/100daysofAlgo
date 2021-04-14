// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));

//Solution 01
function numIdenticalPairs(nums) {
    let hash = {};
    for(i=0;i<nums.length;i++) {
        if(hash[nums[i]]==null) {
            hash[nums[i]] = 0;
        }
        else {
            hash[nums[i]] = hash[nums[i]] + 1;
        }   
    }
    let sol = 0;
    for(let [item,value] of Object.entries(hash)) {
      let temp = 0
      while(value) {
          temp = temp + value;
          value--;
      }
      sol = sol + temp;
    }
    return sol;  
};

//Solution 02 - everytime a count for a number increases - an addition + previous count increases.
// 1=0,
// 2=1,
// 3=3,
// 4=6,
// 5=10,
// 6=15,
// 7=21
function numIdenticalPairs(nums) {
    const map = {}
    let count = 0
        
        for (const number of nums) {
            if (map[number]) {
                count += map[number];
                map[number] += 1;
            } else {
                map[number] = 1;
            }
        }
        return count
}