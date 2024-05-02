const ordenacao = (array) => {
    if(array.length <= 1) return array
    
    let pivot = array[0]
    let leftArray = [], rightArray = []
    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }    
    return [...ordenacao(leftArray), pivot, ...ordenacao(rightArray)]
}

console.log(ordenacao([12, 0, -15]))
module.exports = ordenacao