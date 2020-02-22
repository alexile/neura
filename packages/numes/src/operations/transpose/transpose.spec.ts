import transpose from './index'

describe('transpose', () => {
    it('one two-dimensional array', () => {
        const ndarray = [[1, 2, 3], [4, 5, 6]]
        expect(transpose(ndarray)).toStrictEqual([[1, 4], [2, 5], [3, 6]])
    })
})
