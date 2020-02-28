import useBackpropagation from './backpropagation'

describe('backpropagation', () => {
    it('should solve xor', () => {
        const input = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
        const output = [[0, 0, 1, 1]]

        expect(useBackpropagation(input, output, {iterations: 10000})).toBeTruthy()
    })
})
