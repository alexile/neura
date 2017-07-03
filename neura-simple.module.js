const ndarray = require('ndarray');
const show = require('ndarray-show');
const ops = require('ndarray-ops');
const gemm = require('ndarray-gemm');
const fs = require('fs');

class Neura {

  constructor(dt) {
    if (typeof(dt) !== 'object') this.handleError('Only objects supported');
    this.config = {
      layers: dt.layers,
      iterations: dt.iterations
    }
  }

  /**
   * Deriv and nonlinear sigmoid func
   */
  sigmoid(ndArr, isDeriv) {
    if (isDeriv) {
      let derivResult = ndarray(new Float32Array(ndArr.shape[0]*ndArr.shape[1]), [ndArr.shape[0], ndArr.shape[1]]);
      derivResult = ops.mul(derivResult, ndArr, ops.subeq(monoVector(ndArr.shape[0], ndArr.shape[1]), ndArr));
      return derivResult;
    }
    return ops.recipeq(ops.addseq(ops.expeq(ops.negeq(ndArr)), 1));
  }

  train(data, saving) {
    this.data = {
      input: this.normalizeInputArray(data.input),
      output: this.createOutputArray(data.output)
    }
    if (saving) {

    }
  }

  /**
   * Numpy dot func analogue
   */
  dot(m1, m2) {
    let result = ndarray(new Float32Array(m1.shape[0]*m2.shape[1]), [m1.shape[0], m2.shape[1]]);
    gemm(result, m1, m2);
    return result;
  }

  normalizeInputArray(arr) {
    if (!arr.length || !arr[0].length) {
      throw new Error('This is not an Array');
    }
    let output = [];
    arr.forEach((el, i) => {
      output = output.concat(el);
    })
    return ndarray(new Float32Array(output), [arr.length, arr[0].length]);;
  }

  createOutputArray(arr) {
    return ndarray(new Float32Array(arr), [1, arr.length]).transpose(1, 0);
  }

  handleError(err) {
    throw new Error(err);
  }
}

let n = new Neura({layers: 2, iterations: 100000});
n.train({input: [[1,0,1,0],[1,0,1,0],[1,0,1,0]], output: [1,1,1]}, false);
