import sigmoid from './sigmoid'

describe('sigmoid', () => {
  it('should return sigmoid function of the matrix', () => {
    const input = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
    const output = [
      [ 0.5, 0.5, 0.7310585786300049 ],
      [ 0.5, 0.7310585786300049, 0.7310585786300049 ],
      [ 0.7310585786300049, 0.5, 0.7310585786300049 ],
      [ 0.7310585786300049, 0.7310585786300049, 0.7310585786300049 ]
    ]

    expect(sigmoid(input)).toEqual(output)
  })
})
