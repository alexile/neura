import reciprocal from './index'

describe('reciprocal', () => {
    it('should turn every matrix value into a reciprocal', () => {
        const matrix = [[1, 2, 3], [4, 5, 6]]
        const result = [[1, 1 / 2, 1 / 3], [1 / 4, 1 / 5, 1 / 6]]

        expect(reciprocal(matrix)).toStrictEqual(result)
    })
})
