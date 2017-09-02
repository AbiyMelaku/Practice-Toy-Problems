function get_ways(n) {
    var arr = [0, 1, 2];
    for(var i = 3; i <= n; i++){
      arr[n] = arr[n - 1] + arr[n - 2];
    }
    
    return arr[n] % 1000000007    
}