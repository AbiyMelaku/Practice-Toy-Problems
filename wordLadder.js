beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

function oneDif(word1, word2){
  let diff = 0; 
  for (let i = 0; i < word1.length; i++){
    if(word1[i] !== word2[i]){
      diff++
    }
    if(diff > 1){
      return false
    }
  }
  return true
}

function wordLadder(bw, ew, wl){
  // create a graph 
  // loop through the wl check if one letter diff add the word as edge 
  let map = {}
  let word = 0
  for(let i = -1; i < wl.length; i++){
    if(i == -1){
      word = bw
    } else{
      word = wl[i]
    }
    map[word] = []
    
    for (let j = 0; j < wl.length; j++) {
      if(oneDif(word, wl[j]) && word !== wl[j]){
        map[word].push(wl[j])
      }
    }
  }
  
  //BFS 
  
  let queue = []
  let seen  = {}
  
  queue.push([bw, 1])
  seen[bw] = 1
  
  while(queue.length > 0){
    let cur = queue.shift()
    let word = cur[0]
    let count = cur[1]
    let connections = map[word]
    
    for(let index = 0; index < connections.length; index++){
      if(!seen[connections[index]]){
        seen[connections[index]] = count++
        queue.push([connections[index], count+1])
      }
    }
    
  }
  


  
  return seen[ew] || 0
 
  
  
  
  console.log(seen)
  
  
}


console.log(wordLadder(beginWord, endWord, wordList))