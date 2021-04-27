export const numeroFaltante = (numeros) => {
    let result = 0
    for(let i = 1; i < 100; i++){
       let existeNumero = numeros.find(num => num === i)
       if(!existeNumero){
           result = i
       }
    }
    return result
}