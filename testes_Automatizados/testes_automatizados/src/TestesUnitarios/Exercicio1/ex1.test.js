import { NumeroAntecessor } from './ex1'

test('O número antecessor ', () => {
    const result = NumeroAntecessor(5)
    expect(result).toBe(4)
    const result2 = NumeroAntecessor(30)
    expect(result2).toBe(29)
})