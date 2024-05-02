const contagem = require("../contagem")

test('o total de alunos aprovados com notas [40, 40] deve ser 0', () => {
    expect(contagem([40, 40])).toBe(0)
})

test('o total de alunos aprovados com notas [40, 60] deve ser 1', () => {
    expect(contagem([40, 60])).toBe(1)
})

test('o total de alunos aprovados com notas [50, 50] deve ser 2', () => {
    expect(contagem([50, 50])).toBe(2)
})