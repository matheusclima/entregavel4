const soma = require("../soma")

test('a soma de [0, 0, 0] deve ser 0', () => {
    expect(soma([0, 0])).toBe(0)
})

test('a soma de [-1, 1] deve ser 0', () => {
    expect(soma([-1, 1])).toBe(0)
})

test('a soma de [3, -4, 5] deve ser 4', () => {
    expect(soma([3, -4, 5])).toBe(4)
})