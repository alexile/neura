const exponent = (input: Matrix | number): Matrix | number => {
    if (!Array.isArray(input)) {
        return Math.exp(input)
    }
    return input.map(row => row.map(cell => Math.exp(cell)))
}

export default exponent
