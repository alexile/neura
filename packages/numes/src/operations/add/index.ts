import {compute} from '../../utils/matrix'

const add = (...inputs: (Ndarray | number)[]): Ndarray | number => {
    return compute('add', ...inputs)
}

export default add
