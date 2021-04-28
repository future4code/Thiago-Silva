import {PodeAposentar} from './ex7'
test('possui tempo de empresa ou idade para se aposentar', () => {
    const now = new Date
    const anoNascimento = (now.getFullYear()) - 65
    const tempoEmpresa = (now.getFullYear()) - 30
    expect(PodeAposentar(0,0)).toBe(false)
    expect(PodeAposentar(anoNascimento,tempoEmpresa)).toBe(true)
    expect(PodeAposentar((anoNascimento+6),(tempoEmpresa+6))).toBe(false)
})