import random from './index'
import {getSize} from '../../utils/matrix'
import {validNdarray} from '../../utils/validations'

describe('random', () => {
    it('should generate random matrix', () => {
        const ndarray = random(3, 5)
        const size = getSize(ndarray)

        expect(size.rows).toBe(3)
        expect(size.cols).toBe(5)
        expect(validNdarray(ndarray)).toBeTruthy()
    })
})
