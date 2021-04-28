export const PodeVotar = (anoNascimento) => {
    const data = new Date
    const anoAtual = data.getFullYear()
    const idade = anoAtual - anoNascimento
    if(idade >= 16){
        return true
    }else{
        return false
    }
}