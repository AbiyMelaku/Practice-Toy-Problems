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


console.log(romanToInt('XIV'));