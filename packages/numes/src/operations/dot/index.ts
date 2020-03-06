import shape from '../shape'
import {validMatrix} from '../../utils/validations'

const dotMatrices = (xMatrix: Matrix, yMatrix: Matrix): Matrix => {
    if (!validMatrix(xMatrix, yMatrix)) {
        throw new Error('Invalid input')
    }
    const result: Matrix = new Array(xMatrix.length).fill(undefined).map(_ => [])
    const {rows} = shape(xMatrix)
    const {cols} = shape(yMatrix)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = xMatrix[0].reduce((sum, _, k) => (sum + xMatrix[i][k] * yMatrix[k][j]), 0)
        }
    }
    return result
}

const dot = (...input: Matrix[]) => {
    return input.reduce(dotMatrices)
}

export default dot
