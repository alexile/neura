# neura

Neura is the fast and customizable neural network for JavaScript

Requirements:
Node.js 4.2+

Installation:
npm i neura

For example:
let n = new Neura({layers: 2, iterations: 10000});
n.train({input: [[1,0,0],[0,1,1],[1,1,0]], output: [0,0,1]}, false);
n.run([1,0,0]);

Contributing:
Create issue or PR
