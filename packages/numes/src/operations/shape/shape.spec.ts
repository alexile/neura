import shape from './index'

describe('shape', () => {
    it('should return a shape of a matrix', () => {
        const matrix = [[1, 2, 3], [4, 5, 6]]
        expect(shape(matrix)).toStrictEqual({rows: 2, cols: 3})
    })
})
