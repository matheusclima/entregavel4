const ordenacao = require("../ordenacao")

test('o array [12, 0, -15, 5, 8, -3] ordenado deve resultar [-15, -3, 0, 5, 8, 12]', () => {
    expect(ordenacao([12, 0, -15, 5, 8, -3])).toEqual([-15, -3, 0, 5, 8, 12])
})

test('o array [0] ordenado deve resultar [0]', () => {
    expect(ordenacao([10])).toEqual([10])
})

test('o array [] ordenado deve resultar []', () => {
    expect(ordenacao([])).toEqual([])
})