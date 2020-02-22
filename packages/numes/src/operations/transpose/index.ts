const transpose = (ndarray: Ndarray): Ndarray => {
    return ndarray[0].map((_, cellIndex) => ndarray.map(row => row[cellIndex]))
}

export default transpose
