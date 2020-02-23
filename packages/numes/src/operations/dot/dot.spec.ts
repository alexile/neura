import dot from './index'

describe('multiply', () => {
    it('should multiply two matrices', () => {
        const xNdarray = [[1, 2, 3], [4, 5, 6]]
        const yNdarray = [[7, 8], [9, 10], [11, 12]]
        // const resultNdarray = [[58, 64], [139, 154]]

        expect(dot(xNdarray, yNdarray)).toBeTruthy()
    })
})
