const reciprocal = (input: Ndarray | number): Ndarray | number => {
    if (typeof input === 'number') {
        return 1 / input
    }
    return input.map(row => row.map(cell => 1 / cell))
}

export default reciprocal
