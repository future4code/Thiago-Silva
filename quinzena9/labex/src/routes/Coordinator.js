export const goToTravel = (history, setores) => {
    if (setores === "lista") {
      history.push("/viagens/lista");
    } else if (setores === "criar") {
      history.push("/viagens/criar");
    } else if (setores === "detalhes"){
      history.push("/viagens/detalhes")
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