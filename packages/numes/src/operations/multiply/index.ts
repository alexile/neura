import {compute} from '../../utils/matrix'

const multiply = (...input: (Matrix | number)[]): Matrix | number => {
    return compute('multiply', ...input)
}

export default multiply
