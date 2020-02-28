import {add, Matrix, reciprocal, exponent, negative} from 'numes'

const sigmoid = (matrix: Matrix) => {
    return reciprocal(add(1, exponent(negative(matrix))))
}

export default sigmoid
