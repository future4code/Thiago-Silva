const contString = (word) => {
    let contCurrentLetter = 1
    let lastLetter = word[0]
    let result = ""
    
    for(let i = 1; i < word.length; i++){
        if(word[i] !== lastLetter){
            result+= `${lastLetter}${contCurrentLetter}`
            lastLetter = word[i]
            contCurrentLetter = 1
        }else{
            contCurrentLetter++
        }
    }
    result+= `${lastLetter}${contCurrentLetter}`

    if(result.length === (2*word.length)){
        return word
    }
    return result
}
console.log(contString('accurate'))