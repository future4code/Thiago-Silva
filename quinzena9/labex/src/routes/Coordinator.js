export const goToTravel = (history, setores) => {
    if (setores === "lista") {
      history.push("/viagens/lista");
    } else if (setores === "criar") {
      history.push("/viagens/criar");
    } else if (setores === "detalhes"){
      history.push("/viagens/detalhes")
    }
}

export const goToRegister = (history) => {
    history.push("/cadastro")
}

export const goToLoginWindow = (history) => {
    history.push("/login")
}