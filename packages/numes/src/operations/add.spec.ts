import add from './add'
import {generateNdarray} from '../utils/generators'

describe('add', () => {
    it('two two-dimensional arrays', () => {
        const xNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 1})
        const yNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 2})
        const resultNdarray = generateNdarray({rows: 3, cols: 6, defaultValue: 3})

        expect(add(xNdarray, yNdarray)).toStrictEqual(resultNdarray)
    })
})
