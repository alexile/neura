const dotMatrices = (xMatrix: Matrix, yMatrix: Matrix): Matrix => {
    const result: Matrix = new Array(xMatrix.length).fill([]).map(_ => [])

    for (let i = 0; i < xMatrix.length; i++) {
        for (let j = 0; j < yMatrix[0].length; j++) {
            result[i][j] = xMatrix[0].reduce((sum, _, k) => (sum + xMatrix[i][k] * yMatrix[k][j]), 0)
        }
    }
    return result
}

const dot = (...input: Matrix[]) => {
    return input.reduce(dotMatrices)
}

export default dot
