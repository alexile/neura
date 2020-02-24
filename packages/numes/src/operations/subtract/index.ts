import {compute} from '../../utils/matrix'

const subtract = (...inputs: (Matrix | number)[]): Matrix | number => {
    return compute('subtract', ...inputs)
}

export default subtract
