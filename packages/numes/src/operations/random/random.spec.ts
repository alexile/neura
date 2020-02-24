import random from './index'
import {getSize} from '../../utils/matrix'
import {validMatrix} from '../../utils/validations'

describe('random', () => {
    it('should generate a random matrix', () => {
        const matrix = random(3, 5)
        const size = getSize(matrix)

        expect(size.rows).toBe(3)
        expect(size.cols).toBe(5)
        expect(validMatrix(matrix)).toBeTruthy()
    })
})
