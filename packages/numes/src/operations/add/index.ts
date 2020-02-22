import {sameSize, validNdarray} from '../../utils/validations'

const sumNdarrays = (xInput: Ndarray, yInput: Ndarray): Ndarray => {
    if (!sameSize(xInput, yInput)) {
        throw new Error('All ndarrays must have the same size and dimensions')
    }
    return xInput.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
            cell + yInput[rowIndex][cellIndex]
        ))
    )
}

const sumNumberAndNdarray = (num: number, ndarray: Ndarray): Ndarray => {
    return ndarray.map((row) =>
        row.map((cell) => (
            num + cell
        ))
    )
}

const add = (...inputs: (Ndarray | number)[]): Ndarray | number => {
    if (inputs.length === 0) {
        return []
    }
    if (inputs.length === 1) {
        return inputs[0]
    }
    return inputs.reduce((xInput, yInput) => {
        if (validNdarray(xInput, yInput)) {
            return sumNdarrays(xInput as Ndarray, yInput as Ndarray)
        }
        const isXInputNumber = typeof xInput === 'number'
        const isYInputNumber = typeof yInput === 'number'
        if (isXInputNumber && isYInputNumber) {
            return (xInput as number) + (yInput as number)
        }
        return sumNumberAndNdarray((isXInputNumber ? xInput : yInput) as number, (isYInputNumber ? xInput : yInput) as Ndarray)
    })
}

export default add
