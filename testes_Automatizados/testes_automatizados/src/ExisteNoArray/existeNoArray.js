export const ExisteNoArray = (sourse, query) =>{
    for(let i = 0; i <= sourse.length; i++){
        if(sourse[i] === query){
           return i
        }
    }
    return -1
}