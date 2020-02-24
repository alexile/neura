export const generateMatrix = ({ rows, cols, defaultValue }: MatrixSize & {defaultValue?: number}): Matrix => {
    return Array(rows).fill([]).map((_ => Array(cols).fill(0).map(value => {
        if (defaultValue) {
            return defaultValue
        }
        return value
    })))
}
