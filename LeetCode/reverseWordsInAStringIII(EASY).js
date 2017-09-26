var reverseWords = function(s) {
    s = s.split(' ');
    var result = '';

    for(var j = 0; j < s.length; j++){
        var res = '';
        for(var i = s[j].length - 1; i >= 0 ; i--){
            res += s[j][i];
        }
        result += ' ' + res;
    }
    return result.slice(1);
};



//alternate solution
var reverseWords = function(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ');
}


