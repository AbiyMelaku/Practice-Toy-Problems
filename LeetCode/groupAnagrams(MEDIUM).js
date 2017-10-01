/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/

var groupAnagrams = function(strs) {
    var hash = {};
    
    for(var i = 0; i < strs.length; i++) {
        var str = strs[i];
        
        var key = sortWords(str);
        
        hash[key] = hash[key] || [];
        hash[key].push(str);
        //console.log(hash);
    }
    // console.log(hash);
    var result = [];
    for(var thing in hash) {
        result.push(hash[thing]);
    }
    
    return result;
};


var sortWords = function(string) {
    var arr = string.split('');
    
    arr.sort((a,b)=> a > b ? 1 : -1);
    return arr.join('');
};