function criarTarefa(){
    const tarefaDoDia = document.getElementById('tarefa').value
    const diaDaSemana = document.getElementById('dias-semana').value
    const novaTarefa = document.getElementById(diaDaSemana)
    const limparTarefa = document.getElementById('tarefa')

    if(tarefaDoDia !== ""){
        novaTarefa.innerHTML += `<p onclick="riscar(this)">${tarefaDoDia}</p>`
        limparTarefa.value = ""
    }else{
        alert("Digite uma tarefa válida")
    }
}

function riscar(obj){
    obj.innerHTML = `<p onclick="limparRisco(this)" class=riscar>${obj.innerHTML}</p>`
}

function limparRisco(obj){
    obj.innerHTML = `<p onclick="riscar(this)">${obj.innerHTML}</p>`
}

function limparTudo(){
    let tarefas = document.getElementsByClassName('limpar')
    for(tarefas of numeros){
        let limpeza = tarefa[numeros]
        limpeza.innerHTML = ""
    }
}