import { useEffect, useState } from 'react'
import Logo from './assets/L_C_01.png'

const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home")

  const tabs = [
    "Home",
    "Conócenos",
    "Invierte"
  ]

  const AppBar = () => {
    return (
      <div className='p-2 sticky top-0 z-10 bg-white shadow-md'>
        <ul className='flex gap-2 items-center'>
          <li> <img className='w-32' src={Logo} alt="" /> </li>
          {tabs.map((tab, index) => {
            return <li key={index}>
              <button className='px-4 '
                onClick={() => setSelectedTab(tab)}>
                {tab}
              </button>
            </li>
          })}
        </ul>
      </div>
    )
  }

  const Home = () => {

    const Button = ({ children, minimal = false, ...rest }) => {
      return <button
        {...rest}
        className={`px-4 py-2  rounded-md  active:opacity-80 duration-100 active:duration-0 ${minimal ? "border border-primary-400" : "bg-primary-400 text-white hover:bg-primary-400/90"}`}>
        {children}
      </button>
    }

    return <div className=' bg-white text-center relative h-[calc(100vh-3.5rem)]'>
      <div className="flex flex-col items-center text-primary-400 justify-center text-4xl pt-8">
        <div className="flex">
          <h1>Siembra tu</h1> &nbsp; <h1 className='text-secondary-400'>dinero,</h1>
        </div>
        <div className="flex">
          <h1>cocecha tu</h1> &nbsp; <h1 className='text-secondary-400'>libertad.</h1>
        </div>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-28'>
        <div className='flex gap-2'>
          <Button>Invertir</Button>
          <Button minimal>Más Información</Button>
        </div>
      </div>
    </div>
  }

  const Conocenos = () => {
    return <div>
      <h1>Conócenos</h1>
    </div>
  }

  const Invierte = () => {
    return <div>
      <h1>Invierte</h1>
    </div>
  }

  return <>
    <AppBar></AppBar>
    <>
      {
        selectedTab === "Home" && <Home />
      }
      {
        selectedTab === "Conócenos" && <Conocenos />
      }
      {
        selectedTab === "Invierte" && <Invierte />
      }
    </>
  </>
}

export default App
