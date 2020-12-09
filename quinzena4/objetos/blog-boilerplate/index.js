let postagens = []

function formulario(){
    const post = {
        imagem: document.getElementById("img-post").value,
        titulo: document.getElementById("titulo-post").value,
        autor : document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value
    }
    postagens.push(post.imagem)
    postagens.push(post.titulo)
    postagens.push(post.autor)
    postagens.push(post.conteudo)

    let imagemPost
    let tituloPost
    let autorPost
    let conteudoPost

    for(let i = 0; i < postagens.length; i++){
        imagemPost = postagens[i]
        i++
        tituloPost = postagens[i]
        i++
        autorPost = postagens[i]
        i++
        conteudoPost = postagens[i]
    }

    console.log(postagens)

    document.getElementById("img-post").value = ""
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

    // document.getElementById("formulario").submit()
  
    document.getElementById("container-de-posts").innerHTML += 
    `<img src="${imagemPost}"><p>${tituloPost}<br> ${autorPost} <br> ${conteudoPost} <br> -----------------------------------</p>`
}