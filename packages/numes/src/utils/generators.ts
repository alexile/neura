export const generateNdarray = ({ rows, cols, defaultValue }: NdarraySize & {defaultValue?: number}): Ndarray => {
    return Array(rows).fill([]).map((_ => Array(cols).fill(0).map(value => {
        if (defaultValue) {
            return defaultValue
        }
        return value
    })))
}
