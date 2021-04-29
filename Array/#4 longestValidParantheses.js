// Given a string containing just the characters '(' and ')', 
// find the length of the longest valid (well-formed) parentheses substring.
//      Input: s = ")()())"
//      Output: 4
//      Explanation: The longest valid parentheses substring is "()()".

//Solution Using Counter
// In this approach, we make use of two counters leftleft and rightright. 
// First, we start traversing the string from the left towards the right and for every \text{‘(’}‘(’ encountered, 
// we increment the leftleft counter and for every \text{‘)’}‘)’ encountered, 
// we increment the rightright counter. Whenever leftleft becomes equal to rightright, 
// we calculate the length of the current valid string and keep track of maximum length substring found so far. 
// If rightright becomes greater than leftleft we reset leftleft and rightright to 00.
// Next, we start traversing the string from right to left and similar procedure is applied.

let s=')((()))';
console.log(longestValidParentheses(s));

function longestValidParentheses(s) {
    let left = 0, right = 0;
    let maxlength = 0;
    for(i=0; i<s.length; i++) {
        (s[i]=='(') ? left++ : right++;
        if(left==right) {
            maxlength = Math.max(maxlength, left*2);
        }
        else if (right>left) {
            left = 0; right = 0; 
        }
    }
    left = 0, right = 0;
    for(i=s.length-1; i>=0; i--) {
        (s[i]==')') ? right++ : left++;
        if(left==right) {
            maxlength = Math.max(maxlength, left*2);
        }
        else if (left>right) {
            left = 0; right = 0; 
        }
    }
    return maxlength;
};