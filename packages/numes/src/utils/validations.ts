import {getSize} from './matrix'

export const sameSize = (firstNdarray: Ndarray, ...restNdarrays: Ndarray[]): boolean => {
    const {width, height} = getSize(firstNdarray)
    return !restNdarrays.some(ndarray => {
        const size = getSize(ndarray)
        return size.width !== width || size.height !== height
    })
}
