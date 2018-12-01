interface Options {
  accuracy?: number
  layers?: number
  iterations?: number
}

interface InitialTrainData {
  input: any[]
  output: any[]
}

interface TrainData {

}

export class Neura {
  trainData: TrainData = undefined
  constructor(public options: Options) {
    this.options = Neura.assignDefaultOptions(options)
  }

  private static assignDefaultOptions(options: Options): Options {
    const defaultOptions = {
      accuracy: 0.95,
      layers: 1,
      iterations: 10000
    }

    return {
      ...defaultOptions,
      ...options
    }
  }

  private static normalizeTrainData(trainData: TrainData): TrainData {
    return []
  }

  public train (trainData: InitialTrainData) {
    this.trainData = Neura.normalizeTrainData(trainData)
  }
}

new Neura({accuracy: 5})
