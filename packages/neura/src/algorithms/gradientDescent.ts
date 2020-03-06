import {dot, Matrix, multiply, random, shape, subtract, transpose} from 'numes'
import sigmoid from '../operations/sigmoid'

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

export const train = (input: Matrix, output: Matrix, options: Options) => {
    const transposedOutput = transpose(output)
    const {rows, cols} = shape(input)
    const synapses = [subtract(multiply(cols, random(2, 1)), 1)]
    const layers = []

    for (let i = 0; i < options.iterations; i++) {
        // TODO
    }
}

export const run = (input: Matrix, trainData: TrainOutput): number => {
    return sigmoid(dot(input, trainData.synapses[0]))[0][0]
}
