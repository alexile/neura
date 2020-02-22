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
- [add](https://github.com/alexile/neura/tree/master/packages/numes/src/operations/add) sums 2+ matrices
- [transpose](https://github.com/alexile/neura/tree/master/packages/numes/src/operations/transpose) tranposes (flips)  a matrix over its diagonal