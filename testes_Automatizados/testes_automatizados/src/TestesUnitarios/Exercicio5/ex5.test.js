import { PodeVotar } from './ex5'

test('pode votar com idade a partir de 16 anos ', ()=> {
    const now = new Date
    let anoAtual = now.getFullYear()
    expect(PodeVotar(anoAtual-16)).toBe(true)
    expect(PodeVotar(anoAtual-15)).toBe(false)
})