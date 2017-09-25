/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".


Clarification:
- What constitutes a word?
- A sequence of non-space characters constitutes a word.
- Could the input string contain leading or trailing spaces?
- Yes. However, your reversed string should not contain leading or trailing spaces.
- How about multiple spaces between two words?
- Reduce them to a single space in the reversed string.

*/


var reverseWords = function(str) {
    var words = str.split(' ').reverse();
    words = words.filter(function(val){
        return val.length > 0;
    });
    return words.join(' ');
};
