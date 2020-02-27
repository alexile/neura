const dotMatricies = (xMatrix: Matrix, yMatrix: Matrix): Matrix => {
    const result: Matrix = []
    for (let i = 0; i < xMatrix.length; i++) {
        result[i] = []
        for (let j = 0; j < yMatrix[0].length; j++) {
            let sum = 0
            for (let k = 0; k < xMatrix[0].length; k++) {
                sum += xMatrix[i][k] * yMatrix[k][j]
            }
            result[i][j] = sum
        }
    }
    return result
}

const dot = (...input: Matrix[]) => {
    return input.reduce(dotMatricies)
}

export default dot
