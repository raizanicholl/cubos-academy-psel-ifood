function solucao(precos) {
    
    let total = 0;
    
    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
    }
    
    let maior = precos[0];
    for (const preco of precos) {
        if (preco > maior) {
            maior = preco;
        }
    }
    if (total > 1000 && maior > 200) {
        console.log("PREMIUM")
    } else if (total > 1000 && maior <= 200) {
        console.log("VIP")
    } else {
        console.log("NORMAL")
    }
}