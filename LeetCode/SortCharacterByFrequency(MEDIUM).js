// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


var frequencySort = function(s) {
  var occurrence = [];
  for(var i = 0; i < s.length; i++) {
    var c = s[i];
      if (!occurrence[c]) {
        occurrence[c] = 1;
      } else {
        occurrence[c] += 1;
      }
  }

  //-- Transform to object array
  var occurrenceObj = [];
  for (var key in occurrence) {
    //console.log('key:', key, 'val:', occurrence[key]);
    occurrenceObj.push({ key: key, val: occurrence[key] });
  }

  //-- Sort object array
  occurrenceObj.sort(function(a, b) {
    return parseFloat(b.val) - parseFloat(a.val);
  });

  //-- Print to string
  var output = '';
  for(var i = 0; i<occurrenceObj.length; i++) {
    var obj = occurrenceObj[i];
    for(var j = 0; j < obj.val; j++) {
      output += obj.key;
    }
  }

  return output;
};