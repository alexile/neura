# numes

## Install
```
npm i numes
```
or
```
yarn add numes
```

## Usage
`numes` dosn't require any specific class, the regular two dimensional array is good enough, e.g.
```javascript
const ndarray = [[1, 2, 3], [4, 5, 6]]
const ndarray2 = [[1, 2], [3, 4]]
```
therefore the library approach is just a composition of functions
```javascript
add(transpose(ndarray2), ndarray2)
```
## Operations
- [add](/src/operations/add) sums 2+ matrices/numbers
- [divide](/src/operations/divide) divides 2+ matrices/numbers
- [dot](/src/operations/dot) makes a dot product of 2+ matrices
- [exponent](/src/operations/exponent) returns an exponent of a matrix
- [multiply](/src/operations/multiply) multiplies 2+ matrices/numbers
- [negative](/src/operations/negative) returns negative values for a matrix (literally multiply by -1)
- [random](/src/operations/random) generates a random matrix
- [reciprocal](/src/operations/reciprocal) returns a matrix with reciprocal of all elements
- [shape](/src/operations/shape) returns `{rows, cols}` of a matrix
- [subtract](/src/operations/subtract) subtracts 2+ matrices/numbers
- [transpose](/src/operations/transpose) tranposes (flips)  a matrix over its diagonal