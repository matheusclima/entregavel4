const primo = require("../primo")

test('o número 0 não deve ser avaliado como primo', () => {
    expect(primo(0)).toBe(false)
})

test('o número 1 não deve ser avaliado como primo', () => {
    expect(primo(1)).toBe(false)
})

test('o número 2 deve ser avaliado como primo', () => {
    expect(primo(2)).toBe(true)
})

test('o número 23 deve ser avaliado como primo', () => {
    expect(primo(23)).toBe(true)
})