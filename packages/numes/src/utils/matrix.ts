export const getSize = (ndarray: Ndarray) => {
    return {cols: ndarray[0].length, rows: ndarray.length}
}
