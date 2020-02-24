const transpose = (matrix: Matrix): Matrix => {
    return matrix[0].map((_, cellIndex) => matrix.map(row => row[cellIndex]))
}

export default transpose
