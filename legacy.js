/**
 * Legacy file
 */
const ndarray = require('ndarray');
const show = require('ndarray-show');
const ops = require('ndarray-ops');
const gemm = require('ndarray-gemm');

function monoVector(coordx, coordy) {
  let arr = [];
  const muexp = coordx*coordy;
  for (let i = 0; i < muexp; i++) {
    arr.push(1);
  }
  return ndarray(new Float32Array(arr), [coordx,coordy])
}

function sigmoid(ndArr, isDeriv) {
  if (isDeriv) {
    let derivResult = ndarray(new Float32Array(ndArr.shape[0]*ndArr.shape[1]), [ndArr.shape[0], ndArr.shape[1]]);
    derivResult = ops.mul(derivResult, ndArr, ops.subeq(monoVector(ndArr.shape[0], ndArr.shape[1]), ndArr));
    return derivResult;

  }
  return ops.recipeq(ops.addseq(ops.expeq(ops.negeq(ndArr)), 1));
}

function run(arr) {
  let toAnalyse = ndarray(new Float32Array(arr), [arr.length, 1]).transpose(1,0);
  let prog1 = sigmoid(dot(toAnalyse, data[1].synapse));
  return sigmoid(dot(prog1, data[2].synapse));
}

function dot(m1, m2) {
  let result = ndarray(new Float32Array(m1.shape[0]*m2.shape[1]), [m1.shape[0], m2.shape[1]]);
  gemm(result, m1, m2);
  return result;
}

function normalizeInputArray(arr) {
  if (!arr.length || !arr[0].length) {
    throw new Error('This is not an Array');
  }
  let output = [];
  arr.forEach((el, i) => {
    output = output.concat(el);
  })
  return ndarray(new Float32Array(output), [arr.length, arr[0].length]);;
}

function createOutputArray(arr) {
  return ndarray(new Float32Array(arr), [outputParam, arr.length]).transpose(1, 0);
}


const trainData = {
  input: [
    [0,0,1,1],
    [1,0,1,1],
    [1,1,0,1]
  ],
  output: [0,1,1]
}
let outputParam = 1;

const trainInput = normalizeInputArray(trainData.input);
const trainOutput = createOutputArray(trainData.output);

let config = {
  hiddenLayers: 2,
  iterations: 10000,
}

let data = [];

for (let i = 0; i <= config.hiddenLayers; i++) {
  data.push({});
}

data[1].error = ndarray(new Float32Array(trainData.input.length*trainData.input.length), [trainData.input.length, trainData.input.length]);
data[2].error = ndarray(new Float32Array(trainData.input.length*outputParam), [trainData.input.length, outputParam]);

data[1].synapse = ops.subseq(ops.mulseq(ops.random(ndarray(new Float32Array(trainData.input[0].length*trainData.input.length), [trainData.input[0].length, trainData.input.length])), 2), 1);
data[2].synapse = ops.subseq(ops.mulseq(ops.random(ndarray(new Float32Array(trainData.output.length*outputParam), [trainData.output.length, outputParam])), 2), 1);

for (let i = 0; i < config.iterations; i++) {

  data[0].layer = trainInput;

  data[1].layer = sigmoid(dot(data[0].layer, data[1].synapse));
  data[2].layer = sigmoid(dot(data[1].layer, data[2].synapse));


  data[2].error = ops.sub(data[2].error, trainOutput, data[2].layer);
  data[2].delta = ops.muleq(data[2].error, sigmoid(data[2].layer, true));


  data[1].error = dot(data[2].delta, data[2].synapse.transpose(1, 0));
  data[1].delta = ops.muleq(data[1].error, sigmoid(data[1].layer, true));

  ops.add(data[1].synapse, data[1].synapse, dot(data[0].layer.transpose(1, 0), data[1].delta));
  ops.add(data[2].synapse, data[2].synapse, dot(data[1].layer.transpose(1, 0), data[2].delta));
}

run([1,1,1,0]);
