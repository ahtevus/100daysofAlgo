// 10/04/2021 Leetcode #1299 - easy

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
// and replace the last element with -1.
//   Input: arr = [17,18,5,4,6,1]
// Output:  out = [18,6,6,6,1,-1]

//Solution 01 - iterating the array from right to left - picking up the greatest number from RTL
var arr = [17,18,5,4,6,-1]
var replaceElements = function(arr) {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    var max=0,next;
    for (let i = arr.length - 1; i > 0; i -= 1) {
        if(arr[i] >= max) {
            next = arr[i];
            max = arr[i];
            result[i-1] = next;
        }
        else {
            result[i-1] = max;
        }
    }
    return result;
};

console.log(replaceElements(arr));

//Solution 02 - finding largest number & largest number to it's right and creating an output array
var arr = [17,18,5,4,6,1];
var result = new Array(arr.length);

if(arr.length == 1) {
  result = [-1];
  console.log(result);
  }
else if (arr.length == 2) {
  result = [arr[1],-1];
  console.log(result);
}
else {
  var largest= arr[0];
  var largestindex=0;
  for (i=0; i<=arr.length;i++){
      if (arr[i]>largest) {
          largest=arr[i];
          largestindex=i;
      }
  }

  if (largestindex == (arr.length-1)) {
    result.fill(largest,0,largestindex);
    result.fill(-1,arr.length-1);
    console.log(result);
  }
  else {
    var largest2 = arr[largestindex+1];
    for (j=largestindex+1; j<=arr.length;j++){
      if (arr[j]>largest2) {
          largest2=arr[j];
      }
    }
    result.fill(largest,0,largestindex);
    result.fill(largest2,largestindex,(arr.length-2));
    result.fill(arr[arr.length-1],arr.length-2);
    result.fill(-1,arr.length-1);
    console.log(result);
  }
}