import { useState, useEffect } from "react"
import { find_best_move } from "./Logic"

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const Tablero = ({ player }) => {

  const [tab, setTab] = useState([[null, null, null], [null, null, null], [null, null, null]])
  const [waiting, setWaiting] = useState(false)
  const [turn, setTurn] = useState(0)

  useEffect(() => {
    async function cpuMove() {
      setWaiting(true)
      await sleep(1000)

      const aux = [...tab]
      const { i, j } = find_best_move(tab, turn)

      if (i === -1 || j === -1){
        console.log('Fin')
        return  
      } 

      aux[i][j] = turn ? 'O' : 'X'
      setTab(aux)

      setWaiting(false)
      setTurn(p => p ? 0 : 1)

    }
    if (player !== turn) cpuMove()
  }, [player, turn])

  useEffect(() => {
    console.log('player:', player, 'turn:', turn)
  }, [])

  const handleMove = (i, j) => {
    if (waiting) return
    if (tab[i][j] !== null) return
    setTab(p => {
      const aux = [...p]
      aux[i][j] = player ? 'O' : 'X'
      return aux
    })
    setTurn(p => p ? 0 : 1)
  }

  return (
    <table>
      <tbody>
        {
          tab.map((fila, i) => {
            return (
              <tr key={i}>
                {
                  fila.map((col, j) => {
                    return (
                      <td
                        onClick={() => handleMove(i, j)}
                        className={col === null && turn === player ? 'hov' : ''}
                        key={j}>{col}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
export default Tablero