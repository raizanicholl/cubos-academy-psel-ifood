function solucao(cor1, cor2) {
	if (cor1 === "amarelo" && cor2 === "vermelho" || cor1 === "vermelho" && cor2 === "amarelo") {
        console.log("laranja")
    } else if (cor1 === "azul" && cor2 === "amarelo" || cor1 === "amarelo" && cor2 === "azul") {
        console.log("verde")
    } else if (cor1 === "azul" && cor2 === "vermelho" || cor1 === "vermelho" && cor2 === "azul") {
        console.log("roxo")
    } else {
        console.log(cor1)
    }
}