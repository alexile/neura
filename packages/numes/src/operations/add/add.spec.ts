import add from './index'
import {generateMatrix} from '../../utils/generators'

describe('add', () => {
    it('should sum two matrices arrays', () => {
        const xMatrix = generateMatrix({rows: 3, cols: 6, defaultValue: 1})
        const yMatrix = generateMatrix({rows: 3, cols: 6, defaultValue: 2})
        const resultMatrix = generateMatrix({rows: 3, cols: 6, defaultValue: 3})

        expect(add(xMatrix, yMatrix)).toStrictEqual(resultMatrix)
    })

    it('should sum matrix and number(s)', () => {
        const matrix = [[1, 2, 3], [3, 4, 5]]
        const resultMatrix = [[3, 4, 5], [5, 6, 7]]

        expect(add(matrix, 2)).toStrictEqual(resultMatrix)
        expect(add(1, matrix, 1)).toStrictEqual(resultMatrix)
    })
})
