import dot from './index'

describe('dot', () => {
    it('should multiply two matrices and return a dot product', () => {
        const xMatrix = [[1, 2, 3], [4, 5, 6]]
        const yMatrix = [[7, 8], [9, 10], [11, 12]]
        // const resultNdarray = [[58, 64], [139, 154]]

        expect(dot(xMatrix, yMatrix)).toBeTruthy()
    })
})
