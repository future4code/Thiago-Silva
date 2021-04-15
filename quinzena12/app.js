// 3 operações:
// +1 caractere 
// -1 caractere
// substituir 1 caractere
const isOnEdit = (word1, word2) => {
    const sizeWord1 = word1.length
    const sizeWord2 = word2.length
    let bigger
    if(sizeWord1 > sizeWord2){
      bigger = sizeWord1
    }else{
      bigger = sizeWord2
    }
    if((-1*(sizeWord2 - sizeWord1)) > 1){
      return false
    }else if(sizeWord1 === sizeWord2-1 || sizeWord2 === sizeWord1-1){
      for(let i = 0; i < bigger; i++){
        if(word1[i] !== word2[i]){
          return false
        }else{
          return true
        }
      }
    }else{
      return false
    }
  }
  console.log(isOnEdit('banana', 'banan'))