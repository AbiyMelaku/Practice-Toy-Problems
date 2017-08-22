const romanToInt = (s) => {
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let res = 0;
    
    for(let i = 0; i < s.length; i++){
        let curr = hash[s[i]];
        let prev = hash[s[i - 1]];
        res = curr < prev ? res - curr : res + curr;
    }
    
    return res;
};



//ALTERNATE, slower solution

var characterToNumber = function(character){
    switch(character){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}


var romanToInt = function(s) {
    var result = 0;
    
    for(var i = 0; i < s.length; i++){
        if( i > 0 && (characterToNumber(s[i]) > characterToNumber(s[i - 1])) ){
            result -= 2 * characterToNumber(s[i - 1]); // because previously added [!!!]
        }
        
        result += characterToNumber(s[i]);
    }
    
    return result;
};
