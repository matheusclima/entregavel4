const mdc = require("../mdc")

test('o mdc entre 75 e 45 deve ser 15', () => {
    expect(mdc(75, 45)).toBe(15)
}) 

test('o mdc entre 1 e 25 deve ser 1', () => {
    expect(mdc(1, 25)).toBe(1)
}) 