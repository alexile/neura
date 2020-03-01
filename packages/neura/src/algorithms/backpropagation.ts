import {add, dot, Matrix, multiply, random, shape, subtract, transpose} from 'numes'
import sigmoid from '../operations/sigmoid'
import derivative from '../operations/derivative'

interface Options {
    iterations: number,
    initialSynapse?: Matrix,
    initialNetwork?: TrainOutput,
}

interface TrainOutput {
    layers: Matrix[],
    synapses: Matrix[],
    errors: Matrix[],
    deltas: Matrix[],
}

export const train = (input: Matrix, output: Matrix, options: Options): TrainOutput => {
    const transposedOutput = transpose(output)
    const {cols} = shape(input)
    const initialSynapse = (options.initialNetwork && options.initialNetwork.synapses[0]) || options.initialSynapse || subtract(multiply(2, random(cols, 1)))
    const synapses: Matrix[] = [initialSynapse]
    const layers: Matrix[] = []
    const errors: Matrix[] = []
    const deltas: Matrix[] = []

    for (let i = 0; i < options.iterations; i++) {
        layers[0] = input
        layers[1] = sigmoid(dot(layers[0], synapses[0]))
        errors[1] = subtract(transposedOutput, layers[1])
        deltas[1] = multiply(errors[1], derivative(layers[1]))
        synapses[0] = add(synapses[0], dot(transpose(layers[0]), deltas[1]))
    }

    return {layers, synapses, deltas, errors}
}

export const run = (input: Matrix, trainData: TrainOutput): number => {
    return sigmoid(dot(input, trainData.synapses[0]))[0][0]
}
