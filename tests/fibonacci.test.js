const fibonacci = require("../fibonacci")

test('o primeiro numero da contagem deve ser o correto', () => {
    expect(fibonacci(1)).toMatchObject([0])
})

test('os dois primeiros numeros da contagem devem ser os corretos', () => {
    expect(fibonacci(2)).toMatchObject([0, 1])
})

test('os 10 primeiros numeros de fibonacci devem ser os corretos', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})