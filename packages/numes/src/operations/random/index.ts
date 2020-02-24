const random = (rows: number, cols: number): Matrix => {
    return Array(rows).fill([]).map((_ => Array(cols).fill(0).map(__ => Math.random())))
}

export default random
