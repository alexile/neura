import {add, Matrix, multiply, negative, reciprocal, subtract} from 'numes'

const sigmoid = (matrix: Matrix, isDerivative?: boolean) => {
    if (isDerivative) {
        return multiply(matrix, subtract(matrix, 1))
    }
    return reciprocal(add(negative(matrix), 1))
}

export default sigmoid
