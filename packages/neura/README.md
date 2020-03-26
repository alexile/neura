# neura

Neura is an intuitive, fast, simple and customizable neural network for JavaScript.

It doesn't use classes or external libraries (e.g. `ndarray`). All data should be just a regular native 2-d arrays (e.g. `[[1, 2, 3], [4, 5, 6]]`). All operations are pure functions, so neura doesn't store your data anywhere. The methods always return some sort of results or/and metadata.

### Requirements:
Node.js 8+

### Installation:
```
npm i neura
# or
yarn add neura
```

### Usage:
Import `neura`
```javascript
import neura from 'neura'
// or
import {train, run} from 'neura'
// or
const neura = require('neura')
```

Train the neural network using data sets (e.g. `xor`)
```javascript
const neura = require('neura')
const train = neura.train
const run = neura.run
const trainOutput = train(
    // inputs
    [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]],
    // known outputs/results for the inputs, respectively
    [[0, 0, 1, 1]],
    // options
    {iterations: 10000}
)
// Get the results for some unknown cases
const result = run([[0, 0, 0]], trainOutput) // 1
```

### Tic-Tac-Toe AI
There's [a browser tic-tac-toe game](https://github.com/alexile/neura/tree/master/packages/neura-examples), where 2 AI teach each other using `neura`. You can also play against them. The app is made with `create-react-app`, so you can install, try and modify it easily.

### Another example
Let's create a real estate scoring (chance of some property to be sold)
Yes or no denoted by 1/0

|   id        |   Price in M$      |   Rooms    |   Area    |   Sold     |
|   -------   |   --------------   |   ------   |   -----   |   ------   |
|   1         |   1.12             |       3    |   25      |   0        |
|   2         |   25.2             |       4    |  116      |   1        |
|   ...       |   ...              |     ...    |  ...      |   ...      |
|   100000    |   4.1              |       1    |   65      |   1        |

`input` is 2, 3 and 4 columns (e.g. `[[1.12, 3, 25], ...]`), output is 5 column (just put all results to the single row, e.g. `[[0, 1, ..., 1]]`

First of all, let's train the network using the data above
```javascript
const trainOutput = train(input, output, {iterations: 100000})
```
find the result for some unsold house
```javascript
run([[18, 2, 95]], trainOutput) // 0.85 => This house is likely to be sold
```

### Options
- `iterations` (required) is the number of iterations for the error backpropagation. It affects how precise are results, however, it also can overtrain the network.
- `initialSynapse` train the existing neural network again using another initial synapse
- `initialNetwork` re-train the existing neural network using some extra data

TODO 

### Build & tests
```
# Run tests
yarn run test
# Build the distributive
yarn run build
```