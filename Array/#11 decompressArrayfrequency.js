// Decompress Run-Length Encoded List
// We are given a list nums of integers representing a list compressed with run-length encoding.
// For each such pair, there are freq elements with value val concatenated in a sublist.
// Concatenate all the sublists from left to right to generate the decompressed list.

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Input: nums = [1,1,2,3]
// Output: [1,3,3]

let nums = [1,2,3,4];
console.log(decompressRLElist(nums));

//Solution 01 - spread and fill array operator - little faster than second
function decompressRLElist(nums) {
    let result = []
    for(let i=0; i<nums.length; i+=2) {
        const frequency = nums[i]
        const value = nums[i+1]
        result.push(...new Array(frequency).fill(value))
    }
    return result;
};

//Solution 02 - using while loop - general solution
function decompressRLElist(nums) {
    let len = nums.length/2;
        let result = [];
        while(len!=0) {
            let f = nums.shift();
            let n = nums.shift();
            while(f!=0) {
                result.push(n);
                f--;
            }
            len--;
        }
        return result;
};