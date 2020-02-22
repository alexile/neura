# transpose
Flips a matrix over its diagonal, switching columns to rows

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Matrix_transpose.gif/200px-Matrix_transpose.gif "Matrix Transpose")
```javascript
const ndarr = [
    [1, 2, 3],
    [4, 5, 6]
]

const result = transpose(ndarr)
```

the `result` is

```
[
    [1, 4],
    [2, 5],
    [3, 6]
]
```