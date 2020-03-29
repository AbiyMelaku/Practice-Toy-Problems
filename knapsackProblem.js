function knapsack(w, v, c){
  let maxCap = new Array(c + 1).fill(0)
  for(let i = 0; i < w.length; i++){
    weight = w[i]
    value = v[i]
    let tempMax = maxCap.slice()
    for(let cap = 0; cap <= c; cap++){
      if(cap - weight >= 0){
        tempMax[cap] = Math.max(tempMax[cap], maxCap[cap - weight] + value)
      }
    }
    maxCap = tempMax
  }
  
  return maxCap[c];

  
}

console.log(knapsack([10, 20, 30], [60, 100, 120], 50))