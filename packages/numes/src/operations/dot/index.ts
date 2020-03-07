import shape from '../shape'
import {validMatrix} from '../../utils/validations'

const dotMatrices = (xMatrix: Matrix, yMatrix: Matrix): Matrix => {
    if (!validMatrix(xMatrix, yMatrix)) {
        throw new Error('Invalid input')
    }
    const {rows} = shape(xMatrix)
    const {cols} = shape(yMatrix)

    return new Array(rows).fill(undefined).map((row: any[] = new Array(cols).fill(undefined), i) => {
        return row.map((_, j) => {
            return xMatrix[0].reduce((sum, _, k) => (sum + xMatrix[i][k] * yMatrix[k][j]), 0)
        })
    })
}

const dot = (...input: Matrix[]) => {
    return input.reduce(dotMatrices)
}

export default dot
