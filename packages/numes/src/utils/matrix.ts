import {sameSize, validMatrix} from './validations'

const ops = {
    add: (n1: number, n2: number) => n1 + n2,
    subtract: (n1: number, n2: number) => n1 - n2,
    divide: (n1: number, n2: number) => n1 / n2,
    multiply: (n1: number, n2: number) => n1 * n2
}

export const getSize = (matrix: Matrix) => {
    return {cols: matrix[0].length, rows: matrix.length}
}


const computeMatrices = (operation: string, xInput: Matrix, yInput: Matrix): Matrix => {
    if (!sameSize(xInput, yInput)) {
        throw new Error('All ndarrays must have the same size and dimensions')
    }
    return xInput.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
            ops[operation](cell, yInput[rowIndex][cellIndex])
        ))
    )
}

const computeScalarAndMatrix = (operation: string, num: number, matrix: Matrix): Matrix => {
    return matrix.map((row) =>
        row.map((cell) => (
            ops[operation](num, cell)
        ))
    )
}

export const compute = (operation: string, ...inputs: (Matrix | number)[]): Matrix | number => {
    if (inputs.length === 0) {
        return []
    }
    if (inputs.length === 1) {
        return inputs[0]
    }
    return inputs.reduce((xInput, yInput) => {
        if (validMatrix(xInput, yInput)) {
            return computeMatrices(operation, xInput as Matrix, yInput as Matrix)
        }
        const isXInputNumber = typeof xInput === 'number'
        const isYInputNumber = typeof yInput === 'number'

        if (isXInputNumber && isYInputNumber) {
            return ops[operation](xInput as number, yInput as number)
        }
        return computeScalarAndMatrix(operation, (isXInputNumber ? xInput : yInput) as number, (isYInputNumber ? xInput : yInput) as Matrix)
    })
}