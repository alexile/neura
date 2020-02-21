const addTwoMatrix = (xNdarray: Ndarray, yNdarray: Ndarray): Ndarray => {
    if (xNdarray.length !== yNdarray.length || xNdarray[0].length !== yNdarray[0].length) {
        throw new Error('All ndarrays must have the same dimensions')
    }
    return xNdarray.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            return cell + yNdarray[rowIndex][cellIndex]
        })
    })
}

const add = (...inputs: Ndarray[]): Ndarray => {
    if (inputs.length === 0) {
        return []
    }
    if (inputs.length === 1) {
        return inputs[0]
    }
    return inputs.reduce(addTwoMatrix)
}

export default add
