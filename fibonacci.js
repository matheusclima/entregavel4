const fibonacci = (numeroDeTermos) => {
    let termo1 = 0, termo2 = 1, termo3
    let termos = [termo1, termo2]
    if(numeroDeTermos == 1) {
        return [termo1]
    } else if(numeroDeTermos == 2) {
        return [termo1, termo2]
    } else {
        for(let i = 3; i <= numeroDeTermos; i++) {
            termo3 = termo2 + termo1
            termos.push(termo3)
            termo1 = termo2
            termo2 = termo3
        }
        return termos
    }
}

module.exports = fibonacci


