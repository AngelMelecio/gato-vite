import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tablero from './Tablero'

const App = () => {

  const [player, setPlayer] = useState(null)

  useEffect(() => {
    console.log('Effecto App')
  }, [])

  return (
    <>
      {
        player === null ?
          <>
            <h1>Quién eres?</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button onClick={() => setPlayer(0)}>X</button>
              <button onClick={() => setPlayer(1)}>O</button>
            </div>
          </> :
          <>
            <Tablero
              player={player}
            />
          </>
      }
    </>
  )
}

export default App
