function solucao(obras) {
	let maior = obras[0];
    
    for (const obra of obras)  {
        if (obra.valor > maior.valor) {
            maior = obra;
        } 
    }   console.log(maior.nome)
}