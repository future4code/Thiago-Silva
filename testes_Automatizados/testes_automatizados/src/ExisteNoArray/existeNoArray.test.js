import { ExisteNoArray } from './existeNoArray'
test('O indice do numero ', () => {
    const result = ExisteNoArray("palavra test", "t")
    expect(result).toBe(8)
})