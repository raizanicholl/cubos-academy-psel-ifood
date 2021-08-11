function solucao(primeiraLetra, segundaLetra, palavras) {
    let resultado =[]
    for (let palavra of palavras) {
        if (palavra[0]===primeiraLetra && palavra[1]===segundaLetra) {
            resultado.push (palavra)
            console.log (palavra)
        }
    }
    if (resultado.length === 0) {
        console.log ("NENHUMA")
    }
} 