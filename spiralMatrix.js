function spiral(n){
  let matrix =[]
  for(let i = 0; i < n; i++){
    matrix.push(new Array(n))
  }
  
  let count = 1
  let min_col = 0
  let min_row = 0
  let max_col = n - 1
  let max_row = n - 1
  
  while (min_row <= max_row && min_col <= max_col){
    for(let x = min_col; x <= max_col; x++){
      matrix[min_row][x] = count
      count++
    }
    min_row++
    
    for(let x = min_row; x <= max_row; x++){
      matrix[x][max_col] = count
      count++
    }
    max_col--
    
    for(let x = max_col; x >= min_col; x--){
      matrix[max_row][x]= count
      count++
    }
    max_row--
    
    for(let x = max_row; x >= min_row; x--){
      matrix[x][min_col] = count
      count++
    }
    min_col++
    
  }

  return matrix
  
}
console.log(spiral(4))