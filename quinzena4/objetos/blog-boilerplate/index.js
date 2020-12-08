let postagens = []

function formulario(){
    const post = {
        titulo: document.getElementById("titulo-post").value,
        autor :document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value
    }
    postagens.push(post)

    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

    document.getElementById("container-de-posts").innerHTML += `<p>${post.titulo}<br> ${post.autor} <br> ${post.conteudo} <br> -----------------------------------</p>`
}