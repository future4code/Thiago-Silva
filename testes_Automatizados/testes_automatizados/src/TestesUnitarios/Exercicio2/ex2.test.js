import { IdadeEmDias } from './ex2'

test('Idade em dias ', () => {
    expect(IdadeEmDias(5,3,10)).toBe(1925)
    expect(IdadeEmDias(15,10,20)).toBe(5795)
    expect(IdadeEmDias(0,0,0)).toBe(0)
})