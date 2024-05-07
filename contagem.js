const contagemDeAprovados = (notas) => {
    let quantDeAlunosAprovados = 0
    for(let nota of notas) {
        if(nota >= 50) {
            quantDeAlunosAprovados++
        }
    }
    return quantDeAlunosAprovados
}

module.exports = contagemDeAprovados