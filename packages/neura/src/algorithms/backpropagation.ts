import {add, dot, Matrix, multiply, random, shape, subtract, transpose} from 'numes'
import sigmoid from '../operations/sigmoid'
import derivative from '../operations/derivative'

interface Options {
    iterations: number,
}

const useBackpropagation = (input: Matrix, output: Matrix, options: Options) => {
    const transposedOutput = transpose(output)
    const {cols} = shape(input)
    const synapses = [subtract(multiply(2, random(cols, 1)))]
    const layers = []
    const errors = []
    const deltas = []

    for (let i = 0; i < options.iterations; i++) {
        layers[0] = input
        layers[1] = sigmoid(dot(layers[0], synapses[0]))
        errors[1] = subtract(transposedOutput, layers[1])
        deltas[1] = multiply(errors[1], derivative(layers[1]))
        synapses[0] = add(synapses[0], dot(transpose(layers[0]), deltas[1]))
    }

    return layers[1]
}

export default useBackpropagation
