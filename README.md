# neura

Neura is the fast and customizable neural network for JavaScript

### Requirements:
Node.js 4.2+

### Installation:
```
npm i neura
```

### Usage:
Initialize
```javascript
const Neura = require('neura');
let n = new Neura({layers: 2, iterations: 10000});
```

Add train data and run
```javascript
n.train({input: [[1, 0, 0],[0, 1, 1],[1, 1, 0]], output: [0, 0, 1]});
n.run([1,0,0]);
```

or
```javascript
n.train({input: [[1, 0, 0],[0, 1, 1],[1, 1, 0]], output: [0, 0, 1]})
  .run([1, 0, 0]);
```

Data can be saved in file
```javascript
n.train({input: [[1, 0, 0],[0, 1, 1],[1, 1, 0]], output: [0, 0, 1]})
  .saveToFile('./output.json');
```

Saved neural network synapse can be used again
```javascript
n.readFromFile('./output.json')
  .run([1, 0, 0]);
```

### Contributing:
Create issue or PR
```
git clone https://github.com/AlexanderGY/neura.git
cd neura && npm install
```
