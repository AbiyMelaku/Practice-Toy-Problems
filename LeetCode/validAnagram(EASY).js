/*Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

*/

var isAnagram = function(s, t) {
    if( s.length !== t.length ) return false;
    t = t.split('').sort().join('');
    s = s.split('').sort().join('')
    return t === s;
};

/*Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?*/

var isAnagram = function(s, t) {
    let charCodes = [];
    
    if( s.length!== t.length ){
        return false;
    }
    
    for(let i=0; i< s.length; i++){
        let charCode = s.charCodeAt(i);
        if( charCodes[charCode] !== undefined ){
            charCodes[charCode]++;
        } else {
            charCodes[charCode] = 1;
        }
    }
    
    for(var i=0; i< t.length; i++){
        let charCode = t.charCodeAt(i);
        if( charCodes[charCode] === undefined ){
            return false;
        } else {
            charCodes[charCode] --;
            if( charCodes[charCode] < 0 ){
                return false;
            }
        }
    }
    return true;
};