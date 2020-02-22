import {getSize} from './matrix'

export const sameSize = (firstNdarray: Ndarray, ...restNdarrays: Ndarray[]): boolean => {
    const {rows, cols} = getSize(firstNdarray)
    return !restNdarrays.some(ndarray => {
        const size = getSize(ndarray)
        return size.cols !== cols || size.rows !== rows
    })
}

export const validNdarray = (...input: any[]): boolean => {
    return !input.some(item => !(Array.isArray(item) && Array.isArray(item[0])))
}
