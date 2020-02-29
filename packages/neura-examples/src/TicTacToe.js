import React, {useEffect, useState} from 'react'
import './TicTactToe.css'
import {train, run} from 'neura'

const defaultInput = [Array(9).fill(0)]
const defaultOutput = [[0]]

const TicTacToe = () => {
    const [gameStat, setGameStat] = useState({x: 0, y: 0, draw: 0})
    const [turn, setTurn] = useState(undefined)
    const [field, setField] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [xNN, setXNN] = useState(null)
    const [xSteps, setXSteps] = useState([])
    const [yNN, setYNN] = useState(null)
    const [ySteps, setYSteps] = useState([])
    const [delay, setDelay] = useState(1)
    const [player, setPlayer] = useState(undefined)
    const [preventTraining, setPreventTraining] = useState(false)

    const reversePlayers = {x: 'y', y: 'x'}

    const reset = () => {
        setTimeout(() => {
            cleanRoundData()
            if (!preventTraining) {
                setTurn('x')
            }
        }, delay)
    }

    const cleanRoundData = () => {
        setTurn(undefined)
        setField([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setXSteps([])
        setYSteps([])
    }
    const startTraining = () => setTurn('x')
    const resetTraining = () => {
        cleanRoundData()
        setXNN(null)
        setYNN(null)
        setGameStat({x: 0, y: 0, draw: 0})
    }
    const computeGameStatus = () => {
        const patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
        const winner = patterns.reduce((winner, [x, y, z]) => {
            if (field[x] && field[x] === field[y] && field[z] === field[x]) {
                return field[x]
            }
            return winner
        }, 0)
        // Someone won
        if (winner) {
            if (winner === 1) {
                if (xSteps.length) {
                    const trainXOutput = train(xSteps, [new Array(xSteps.length).fill(1)], {initialSynapse: xNN.synapses[0], iterations: 10000})
                    setXNN(trainXOutput)
                }

                if (ySteps.length) {
                    const trainYOutput = train(ySteps, [new Array(ySteps.length).fill(0)], {initialSynapse: yNN.synapses[0], iterations: 10000})
                    setYNN(trainYOutput)
                }
                setGameStat({
                    ...gameStat,
                    x: gameStat.x + 1
                })
            }
            if (winner === -1) {
                if (xSteps.length) {
                    const trainXOutput = train(xSteps, [new Array(xSteps.length).fill(0)], {initialSynapse: xNN.synapses[0], iterations: 10000})
                    setXNN(trainXOutput)
                }
                if (ySteps.length) {
                    const trainYOutput = train(ySteps, [new Array(ySteps.length).fill(1)], {initialSynapse: yNN.synapses[0], iterations: 10000})
                    setYNN(trainYOutput)
                }
                setGameStat({
                    ...gameStat,
                    y: gameStat.y + 1
                })
            }
            reset()
            return true
        } else if (!field.some(cell => !cell)) {
            if (xSteps.length) {
                const trainXOutput = train(xSteps, [new Array(xSteps.length).fill(0)], {initialSynapse: xNN.synapses[0], iterations: 10000})
                setXNN(trainXOutput)
            }
            if (ySteps.length) {
                const trainYOutput = train(ySteps, [new Array(ySteps.length).fill(0)], {initialSynapse: yNN.synapses[0], iterations: 10000})
                setYNN(trainYOutput)
            }
            setGameStat({
                ...gameStat,
                draw: gameStat.draw + 1
            })
            reset()
            return true
        }
        return false
    }
    //xNN = ✕ = 1
    useEffect(() => {
        if (turn === 'x' && player !== 'x') {
            const trainData = xNN || train(defaultInput, defaultOutput, {iterations: 10000})
            const targetFields = field.map((cell, index) => {
                if (!cell) {
                    const dataSet = [...field]
                    dataSet[index] = 1
                    return run([dataSet], trainData)
                }
                return -Infinity
            })
            const targetIndex = targetFields.reduce((result, weight, index) => {
                return weight > targetFields[result] ? index : result
            }, 0)
            const nextField = [...field]
            nextField[targetIndex] = 1
            setXNN(trainData)
            setField(nextField)
            setXSteps([
                ...xSteps,
                nextField
            ])

            const gameStatus = computeGameStatus()
            if (!gameStatus) {
                setTurn('y')
            }
        }
    }, [turn])

    //yNN = ○ = -1
    useEffect(() => {
        if (turn === 'y' && player !== 'y') {
            const trainData = yNN || train(defaultInput, defaultOutput, {iterations: 10000})
            const targetFields = field.map((cell, index) => {
                if (!cell) {
                    const dataSet = [...field]
                    dataSet[index] = -1
                    return run([dataSet], trainData)
                }
                return -Infinity
            })
            const targetIndex = targetFields.reduce((result, weight, index) => {
                return weight > targetFields[result] ? index : result
            }, 0)
            const nextField = [...field]
            nextField[targetIndex] = -1
            setYNN(trainData)
            setField(nextField)
            setYSteps([
                ...ySteps,
                nextField
            ])
            const gameStatus = computeGameStatus()
            if (!gameStatus) {
                setTurn('x')
            }
        }
    }, [turn])

    const onClickCell = (index) => {
        if (player && !field[index]) {
            const nextField = [...field]
            nextField[index] = player === 'x' ? 1 : -1
            setField(nextField)
            const gameStatus = computeGameStatus()
            if (!gameStatus) {
                setTurn(reversePlayers[player])
            }
        }
    }

    const playGame = () => {
        // const player = Math.random() > 0.5 ? 'x' : 'y'
        const player = 'x'
        setPlayer(player)
        setPreventTraining(true)
        setTurn('x')
    }

    return (
        <div className={'TicTactToe'}>
            <div className={'TicTactToe__wrapper'}>
                <div>
                    {player === 'x' && <span className={'TicTactToe__playerSign'}>You</span>}{' '}✕ {gameStat.x}
                </div>
                <div className={'TicTactToe__field'}>
                    {field.map((cell, index) => {
                        return (
                            <div key={index} className={'TicTactToe__cell'} onClick={() => onClickCell(index)}>
                                {cell === 1 ? '✕' : cell === -1 ? '○' : ''}
                            </div>
                        )
                    })}
                </div>
                <div>
                    ○ {gameStat.y}{' '}{player === 'y' && <span className={'TicTactToe__playerSign'}>You</span>}
                </div>
            </div>
            <div className={'TicTactToe__throttling'}>
                <label htmlFor="delay">Throttling ({delay})</label>
                <input id={'delay'} type="range" value={delay} min={1} max={1000} onChange={event => setDelay(event.currentTarget.value)}/>
            </div>
            <div className={'TicTactToe__controls'}>
                <button onClick={startTraining}>Training</button>
                <button onClick={resetTraining}>Reset</button>
                <button title={'You must train the neural network first'} onClick={playGame} disabled={(gameStat.x + gameStat.y + gameStat.draw) < 50}>Play</button>
            </div>
            <div>
                = {gameStat.draw}
            </div>
        </div>
    )
}

export default TicTacToe
