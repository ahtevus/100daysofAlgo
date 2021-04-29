
// Write a function that reverses a string. The input string is given as an array of characters
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


var reverseString = function(s) {
    console.log(s.reverse());
};

var reverseString = function(s) {
    var left = null;
    var right = null;
    var length = s.length;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1)
    {
        [s[left], s[right]] = [s[right], s[left]];
    }
    return s;
    console.log(s);
};

var reverseString = function(s) {
    var counter = 0;
    for(i=0,j=(s.length-1);i<(s.length/2);i++,j--) {
        let temp = s[i];
        s[i]=s[j];
        s[j]=temp;
    }
    console.log(s);
};