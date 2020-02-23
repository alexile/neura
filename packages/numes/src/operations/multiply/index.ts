import {compute} from '../../utils/matrix'

const multiply = (...input: (Ndarray | number)[]): Ndarray | number => {
    return compute('mul', ...input)
}

export default multiply
