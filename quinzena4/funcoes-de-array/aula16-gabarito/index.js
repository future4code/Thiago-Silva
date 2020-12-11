let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((desp) => {
        divDespesas.innerHTML += `valor: R$${desp.valor} | tipo: ${desp.tipo} | descrição: ${desp.descricao}<br>`
    })
}


// SEGUNDO 
function imprimirExtrato(despesas){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0



    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((desp) => {
        gastoTotal += desp.valor

        if(desp.tipo === "alimentação"){
            gastoAlimentacao += desp.valor
        }
        else if(desp.tipo === "utilidades"){
            gastoUtilidades += desp.valor
        }
        else if(desp.tipo === "viagem"){
            gastoViagem += desp.valor
        }
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato(arrDespesas)
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(despesas){
    let divFiltro = document.getElementById('resultadoFiltro')
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas = despesas.filter((desp)=>{
        if(desp.tipo === tipoFiltro && desp.valor >= valorMin && desp.valor <= valorMax){
            divFiltro.innerHTML += `valor: R$${desp.valor} | tipo: ${desp.tipo} | descrição: ${desp.descricao}<br>`
        }
        else{
            divFiltro.innerHTML +="nenhum valor correponde"
        }
    })



    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}