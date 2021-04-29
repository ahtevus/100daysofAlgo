// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//      Input: nums = [8,1,2,2,3]
//      Output: [4,0,1,1,3]
//      Input: nums = [6,5,4,8]
//      Output: [2,1,0,3]

let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));

//Solution 01 - if you arrange the array in ascending order - you can get the order of number using INdexOf

function smallerNumbersThanCurrent(nums) {
    const result = [];
	const unsortedArr = [...nums];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < unsortedArr.length; i++) {
		result.push(nums.indexOf(unsortedArr[i]));
	}
	return result;
}