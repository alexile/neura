import multiply from './index'

describe('multiply', () => {
    it('should multiply two matrices', () => {
        const xNdarray = [[1, 2, 3], [4, 5, 6]]
        const yNdarray = [[7, 8], [9, 10], [11, 12]]
        // const resultNdarray = [[58, 64], [139, 154]]

        expect(multiply(xNdarray, yNdarray)).toBeTruthy()
    })

    it('should multiply matrix by number', () => {
        const xNdarray = [[1, 2, 3], [4, 5, 0]]
        const num = 9
        // const resultNdarray = [[9, 18, 27], [36, 45, 0]]

        expect(multiply(xNdarray, num)).toBeTruthy()
    })
})
