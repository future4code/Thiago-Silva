export const PodeAposentar = (anoNascimento, anoIngressoEmpresa) => {
    if (anoNascimento > 1900 && anoIngressoEmpresa > 1900) {
        const now = new Date
        const idade = (now.getFullYear()) - anoNascimento
        const tempoDeEmpresa = (now.getFullYear()) - anoIngressoEmpresa
        return ((idade >= 65) || (tempoDeEmpresa >= 30) || (idade >= 60 && tempoDeEmpresa >= 25))
    }else{
        return false
    }
    
}