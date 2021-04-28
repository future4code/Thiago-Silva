export const tipoDeTriangulo = (A, B, C) => {
    return (((A+B) >= C) && ((A+C) >= B) && ((C+B) >= A))
}