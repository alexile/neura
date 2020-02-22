import add from './index'
import {generateNdarray} from '../../utils/generators'

describe('add', () => {
    it('should sum two matrices arrays', () => {
        const xNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 1})
        const yNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 2})
        const resultNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 3})

        expect(add(xNdarray, yNdarray)).toStrictEqual(resultNdarray)
    })

    it('should sum matrix and number(s)', () => {
        const ndarray = [[1, 2, 3], [3, 4, 5]]
        const result = [[3, 4, 5], [5, 6, 7]]

        expect(add(ndarray, 2)).toStrictEqual(result)
        expect(add(1, ndarray, 1)).toStrictEqual(result)
    })
})
