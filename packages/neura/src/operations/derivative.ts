import {Matrix, multiply, subtract} from 'numes'

const derivative = (matrix: Matrix) => {
    return multiply(matrix, subtract(1, matrix))
}

export default derivative
