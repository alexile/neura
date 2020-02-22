const multiply = (...ndarrays: (Ndarray | number)[]): Ndarray => {
    return ndarrays[0] as Ndarray
}

export default multiply
