import { MaiorQue } from './ex3'

test('O numero é maior que 10: ', () => {
    expect(MaiorQue(50)).toBe(true)
    expect(MaiorQue(9)).toBe(false)
    expect(MaiorQue(100)).toBe(true)
    expect(MaiorQue(-10)).toBe(false)
})