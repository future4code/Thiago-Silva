import { tipoDeTriangulo } from './ex6'
test('se triangulo é igual a true', () => {
    expect(tipoDeTriangulo(3,5,7)).toBe(true)
    expect(tipoDeTriangulo(15, 15, 20)).toBe(true)
    expect(tipoDeTriangulo(1,1,5)).toBe(false)
    expect(tipoDeTriangulo(5,5,15)).toBe(false)
})