import {sameSize} from '../utils/validations'

const sumNdarrays = (xNdarray: Ndarray, yNdarray: Ndarray): Ndarray => {
    if (!sameSize(xNdarray, yNdarray)) {
        throw new Error('All ndarrays must have the same size and dimensions')
    }
    return xNdarray.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
            cell + yNdarray[rowIndex][cellIndex]
        ))
    )
}

const add = (...inputs: Ndarray[]): Ndarray => {
    if (inputs.length === 0) {
        return []
    }
    if (inputs.length === 1) {
        return inputs[0]
    }
    return inputs.reduce(sumNdarrays)
}

export default add
