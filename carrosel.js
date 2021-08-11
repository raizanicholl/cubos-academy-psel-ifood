function solucao(sequencia) {
    let tamanhoString = sequencia.length
let indice = 0

for (let i = 0; i < tamanhoString; i++) {
  if (sequencia.charAt(i) === '<') {
    if (indice === 0) {
      indice = 6
    } else {
      indice--
    }

  } else {
    if (indice === 6) {
      indice = 0
    } else {
      indice++
    }
  }
}
console.log(indice)
} 