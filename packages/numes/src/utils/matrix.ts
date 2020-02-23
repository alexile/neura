import {sameSize, validNdarray} from './validations'

const ops = {
    add: (n1: number, n2: number) => n1 + n2,
    sub: (n1: number, n2: number) => n1 - n2,
    div: (n1: number, n2: number) => n1 / n2,
    mul: (n1: number, n2: number) => n1 * n2,
}

export const getSize = (ndarray: Ndarray) => {
    return {cols: ndarray[0].length, rows: ndarray.length}
}


const computeMatrices = (operation: string, xInput: Ndarray, yInput: Ndarray): Ndarray => {
    if (!sameSize(xInput, yInput)) {
        throw new Error('All ndarrays must have the same size and dimensions')
    }
    return xInput.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
            ops[operation](cell, yInput[rowIndex][cellIndex])
        ))
    )
}

const computeScalarAndMatrix = (operation: string, num: number, ndarray: Ndarray): Ndarray => {
    return ndarray.map((row) =>
        row.map((cell) => (
            ops[operation](num, cell)
        ))
    )
}

export const compute = (operation: string, ...inputs: (Ndarray | number)[]): Ndarray | number => {
    if (inputs.length === 0) {
        return []
    }
    if (inputs.length === 1) {
        return inputs[0]
    }
    return inputs.reduce((xInput, yInput) => {
        if (validNdarray(xInput, yInput)) {
            return computeMatrices(operation, xInput as Ndarray, yInput as Ndarray)
        }
        const isXInputNumber = typeof xInput === 'number'
        const isYInputNumber = typeof yInput === 'number'

        if (isXInputNumber && isYInputNumber) {
            return ops[operation](xInput as number, yInput as number)
        }
        return computeScalarAndMatrix(operation, (isXInputNumber ? xInput : yInput) as number, (isYInputNumber ? xInput : yInput) as Ndarray)
    })
}