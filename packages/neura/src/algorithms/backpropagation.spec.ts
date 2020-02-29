import {run, train} from './backpropagation'

describe('backpropagation', () => {
    it('should solve xor', () => {
        const input = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
        const output = [[0, 0, 1, 1]]

        const trainOutput = train(input, output, {iterations: 10000})

        expect(Math.round(run([[1, 0, 0]], trainOutput))).toBeTruthy()
        expect(Math.round(run([[0, 0, 0]], trainOutput))).toBeTruthy()
        expect(Math.round(run([[0, 0, 1]], trainOutput))).toBeFalsy()
        expect(Math.round(run([[0, 0, 0]], trainOutput))).toBeTruthy()
    })
})
