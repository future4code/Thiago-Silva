import {MacasCompradas} from './ex4'
test('Teste do valor correto ', () => {
    expect(MacasCompradas(1)).toBe(1.30)
    expect(MacasCompradas(12)).toBe(12)
    expect(MacasCompradas(11)).toBe(14.30)
    expect(MacasCompradas(100)).toBe(100)
    expect(MacasCompradas(0)).toBe(0)
})