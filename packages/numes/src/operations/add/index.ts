import {compute} from '../../utils/matrix'

const add = (...inputs: (Matrix | number)[]): Matrix | number => {
    return compute('add', ...inputs)
}

export default add
