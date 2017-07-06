const ndarray = require('ndarray');
const show = require('ndarray-show');
const ops = require('ndarray-ops');
const gemm = require('ndarray-gemm');
const fs = require('fs');
const getPixels = require('get-pixels');

/**
 * Neura class
 * @type {Object}
 */
class Neura {
  constructor(dt) {
    if (typeof(dt) !== 'object') throw new Error('Only objects supported');
    this.config = {
      layers: dt.layers || 2,
      iterations: dt.iterations || 60000
    }
    this.layers = [];
  }

  /**
   * Deriv and nonlinear sigmoid func
   * Looking for more info? https://en.wikipedia.org/wiki/Sigmoid_function
   */
  sigmoid(ndArr, isDeriv) {
    if (isDeriv) {
      let derivResult = ndarray(new Float32Array(ndArr.shape[0]*ndArr.shape[1]), [ndArr.shape[0], ndArr.shape[1]]);
      derivResult = ops.mul(derivResult, ndArr, ops.subeq(this.monoVector(ndArr.shape[0], ndArr.shape[1]), ndArr));
      return derivResult;
    }
    return ops.recipeq(ops.addseq(ops.expeq(ops.negeq(ndArr)), 1));
  }

  monoVector(coordx, coordy) {
    let arr = [];
    const muexp = coordx*coordy;
    for (let i = 0; i < muexp; i++) {
      arr.push(1);
    }
    return ndarray(new Float32Array(arr), [coordx, coordy]);
  }


  train(data) {
    this.data = {
      input: this.normalizeInputArray(data.input),
      output: this.createOutputArray(data.output)
    }

    /**
     * TODO To deep network - loop of layers
     */
    this.synapse = ops.subseq(ops.mulseq(ops.random(ndarray(new Float32Array(this.data.input.shape[1] * 1), [this.data.input.shape[1], 1])), 2), 1);
    this.error = ndarray(new Float32Array(this.data.output.shape[0] * 1), [this.data.output.shape[0], 1]);
    this.delta = null;

    for (let i = 0; i < this.config.iterations; i++) {
      this.layers[0] = this.data.input;
      this.layers[1] = this.sigmoid(this.dot(this.layers[0], this.synapse));
      this.error = ops.sub(this.error, this.data.output, this.layers[1]);
      this.delta = ops.muleq(this.error, this.sigmoid(this.layers[1], true));
      ops.add(this.synapse, this.synapse, this.dot(this.layers[0].transpose(1, 0), this.delta));
    }
    return this;
  }

  run(arr) {
    const toPrognose = ndarray(new Float32Array(arr), [arr.length, 1]).transpose(1,0);
    return this.sigmoid(this.dot(toPrognose, this.synapse));
  }

  /**
   * Numpy dot func analogue
   */
  dot(m1, m2) {
    let result = ndarray(new Float32Array(m1.shape[0]*m2.shape[1]), [m1.shape[0], m2.shape[1]]);
    gemm(result, m1, m2);
    return result;
  }

  saveToFile(filename) {
    fs.writeFileSync(filename, JSON.stringify({nn: this.synapse}));
    return this;
  }

  readFromFile(filename) {
    return require(filename).nn;
  }

  getImages(path) {
    let self = this;
    fs.readdir(path, (err, dirs) => {
      if (err) {
        throw new Error('Folder doesn`t exist');
      }
      dirs.forEach(dir => {
        fs.readdir(path + '/${dir}', (err, child) => {
          if (err) {
            throw new Error('Folder doesn`t exist');
          }
          
        })
      })

    })
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

}

let n = new Neura({layers: 2, iterations: 10000});
n.getImages('/home/user/Work/testData');
module.exports = Neura;
