import multiply from './index'

describe('multiply', () => {
    it('should multiply two matrices', () => {
        const xMatrix = [[1, 2, 3], [4, 5, 6]]
        const yMatrix = [[7, 8, 9], [10, 11, 12]]
        // const resultNdarray = [[58, 64], [139, 154]]

        expect(multiply(xMatrix, yMatrix)).toBeTruthy()
    })

    it('should multiply matrix by number (scalar multiplication)', () => {
        const matrix = [[1, 2, 3], [4, 5, 6]]
        const factor = 9

        expect(multiply(matrix, factor)).toStrictEqual([[9, 18, 27], [36, 45, 54]])
    })
})
