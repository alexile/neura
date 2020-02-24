import {compute} from '../../utils/matrix'

const divide = (...inputs: (Matrix | number)[]): Matrix | number => {
    return compute('divide', ...inputs)
}

export default divide
