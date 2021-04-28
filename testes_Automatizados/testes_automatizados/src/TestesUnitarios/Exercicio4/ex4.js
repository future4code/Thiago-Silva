export const MacasCompradas = (qtd) => {
    if(qtd >= 12){
        return qtd
    }else{
        return(qtd*1.30)
    }
}