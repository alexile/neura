import {Matrix, multiply, random, shape, subtract, transpose} from 'numes'

export const train = (input: Matrix, output: Matrix) => {
    const transposedOutput = transpose(output)
    const {rows, cols} = shape(input)
    const xSynapse = subtract(multiply(2, random(2, 1)), 1)
}
