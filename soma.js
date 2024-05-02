const soma = (numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

module.exports = soma