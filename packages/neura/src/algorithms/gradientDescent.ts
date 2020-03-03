import {Matrix, multiply, random, shape, subtract, transpose} from 'numes'

export const train = (input: Matrix, output: Matrix) => {
    const transposedOutput = transpose(output)
    const {rows, cols} = shape(input)
    const synapses = [subtract(multiply(cols, random(2, 1)), 1)]
    const layers = []

    for (let i = 0; i < 10000; i++) {
        // TODO
    }
}
