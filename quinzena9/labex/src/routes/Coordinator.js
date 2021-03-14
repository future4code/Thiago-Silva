
export const goToTravel = (history, setores) => {
    if (setores === "lista") {

      const token = localStorage.getItem("token")
      var payload = token.split(".")[1]
      var testeUsuario = ((JSON.parse(window.atob(payload))).email)

      if(testeUsuario === "revisor@labex.com"){
        history.push("/viagens/lista");
      }else{
        alert("Somente o Revisor pode acessar esta área")
        history.push("/viagens");
      }

    } else if (setores === "criar") {
      
      const token = localStorage.getItem("token")
      var payload = token.split(".")[1]
      var testeUsuario = ((JSON.parse(window.atob(payload))).email)

      if(testeUsuario === "adm@labex.com"){
        history.push("/viagens/criar");
      }else{
        alert("Somente o Administrador pode acessar esta área")
        history.push("viagens")
      }

    } else if (setores === "detalhes"){
      history.push("/viagens/detalhes")
    } else if (setores === "revisor"){
      history.push("/viagens/revisor")
    }
}

export const goToListTrip = (history) => {
  history.push("/viagens")
}

export const goToRegister = (history) => {
    history.push("/cadastro")
}

export const replaceToLogin = (history) => {
    history.replace("/login")
}