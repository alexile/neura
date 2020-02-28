import multiply from '../multiply'

const negative = (input: Matrix | number): Matrix | number => {
    return multiply(-1, input)
}

export default negative
