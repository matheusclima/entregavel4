let mdc = (a, b) => {
    if(a % b == 0) {
        return b
    }
    return mdc(b, a % b)
}

module.exports = mdc