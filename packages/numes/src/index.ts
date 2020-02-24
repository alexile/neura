import add from './operations/add'
import divide from './operations/divide'
import dot from './operations/dot'
import exponent from './operations/exponent'
import multiply from './operations/multiply'
import negative from './operations/negative'
import random from './operations/random'
import reciprocal from './operations/reciprocal'
import shape from './operations/shape'
import subtract from './operations/subtract'
import transpose from './operations/transpose'

export {
    add,
    divide,
    dot,
    exponent,
    multiply,
    negative,
    random,
    reciprocal,
    shape,
    subtract,
    transpose,
}

export type Matrix = number[][]

export type MatrixSize = {
    rows: number,
    cols: number,
}
