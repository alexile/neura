export const generateNdarray = ({ rows, cols, random, defaultValue }: NdarraySize & NdarrayGenerationOptions): Ndarray => {
    return Array(rows).fill([]).map((_ => Array(cols).fill(0).map(value => {
        if (random) {
            return Math.random()
        }
        if (defaultValue) {
            return defaultValue
        }
        return value
    })))
}
