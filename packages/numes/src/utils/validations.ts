import {getSize} from './matrix'

export const sameSize = (xMatrix: Matrix, ...restMatrix: Matrix[]): boolean => {
    const {rows, cols} = getSize(xMatrix)
    return !restMatrix.some(matrix => {
        const size = getSize(matrix)
        return size.cols !== cols || size.rows !== rows
    })
}

export const validNdarray = (...input: Matrix[]): boolean => {
    return !input.some(item => !(Array.isArray(item) && Array.isArray(item[0])))
}
