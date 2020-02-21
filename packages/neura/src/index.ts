import ndarray from 'ndarray'
import ops from 'ndarray-ops'
import gemm from 'ndarray-gemm'
import fs from 'fs'

export default class Neura {
    config: any
    layers: any
    data: any
    synapse: any
    error: any
    delta: any
    constructor(dt: any) {
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
    sigmoid(ndArr: any, isDeriv?: boolean) {
        if (isDeriv) {
            let derivResult = ndarray(new Float32Array(ndArr.shape[0]*ndArr.shape[1]), [ndArr.shape[0], ndArr.shape[1]]);
            derivResult = ops.mul(derivResult, ndArr, ops.subeq(this.monoVector(ndArr.shape[0], ndArr.shape[1]), ndArr));
            return derivResult;
        }
        return ops.recipeq(ops.addseq(ops.expeq(ops.negeq(ndArr)), 1));
    }

    monoVector(coordx: any, coordy: any) {
        let arr = [];
        const muexp = coordx*coordy;
        for (let i = 0; i < muexp; i++) {
            arr.push(1);
        }
        return ndarray(new Float32Array(arr), [coordx, coordy]);
    }


    train(data: any) {
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

    run(arr: any) {
        const toPrognose = ndarray(new Float32Array(arr), [arr.length, 1]).transpose(1,0);
        return this.sigmoid(this.dot(toPrognose, this.synapse));
    }

    /**
     * Numpy dot func analogue
     */
    dot(m1: any, m2: any) {
        let result = ndarray(new Float32Array(m1.shape[0]*m2.shape[1]), [m1.shape[0], m2.shape[1]]);
        gemm(result, m1, m2);
        return result;
    }

    saveToFile(filename: string) {
        fs.writeFileSync(filename, JSON.stringify({nn: this.synapse}));
        return this;
    }

    readFromFile(filename: string) {
        return require(filename).nn;
    }

    normalizeInputArray(arr: any) {
        if (!arr.length || !arr[0].length) {
            throw new Error('This is not an Array');
        }
        let output: any[] = [];
        arr.forEach((el: any) => {
            output = output.concat(el);
        })
        return ndarray(new Float32Array(output), [arr.length, arr[0].length]);;
    }

    createOutputArray(arr: any) {
        return ndarray(new Float32Array(arr), [1, arr.length]).transpose(1, 0);
    }

}
