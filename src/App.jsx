import { useEffect, useState } from 'react'
import Logo from './assets/logos/L_C_02.png'
import Video from './assets/videos/cultivalia.mp4'
import Vaquero from './assets/images/vaquero.png'
import { Formik } from 'formik'
import Input from './components/inputs/Input'
import Options from './components/inputs/Options'

const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home")

  const tabs = [
    "Princial",
    // "Invierte",
    // "Conócenos",
  ]

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  const AppBar = () => {

    const [appBarStyles, setAppBarSyles] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setAppBarSyles(0)
        } else if (appBarStyles === 0) {
          setAppBarSyles(1)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <div className={`sticky top-0 z-10 w-full px-3  duration-150 ${appBarStyles ? "bg-gray-700/70" : ""}`}>
        <ul className='relative flex items-center h-10 gap-2 text-white'>
          <li> <img className='w-32' src={Logo} alt="" /> </li>
          {tabs.map((tab, index) => {
            return <li key={index}>
              <button className='px-4 text-shadow'
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


    const Button = ({ children, minimal = false, secondary, className, ...rest }) => {
      return <button
        {...rest}
        className={`h-10 rounded-md  text-shadow  active:opacity-80 duration-100 active:duration-0 ${minimal ? "border border-primary-300 text-white" : secondary ? "bg-secondary-300 text-white hover:bg-secondary-300/90" : "bg-primary-300 text-white hover:bg-primary-300/90"} ${className}`}>
        {children}
      </button>
    }

    return <>
      <div
        className='relative h-screen overflow-hidden text-center -translate-y-10'>
        <video src={Video} autoPlay muted loop className='absolute object-cover size-full -z-10'></video>
        <div style={{ boxShadow: 'inset 0 0 100px 80px rgba(0,0,0,0.5)' }} className='absolute size-full -z-10'></div>

        <div
          className="flex flex-col items-center justify-center pt-20 text-4xl text-white text-shadow">
          <div className="flex">
            <h1>Siembra tu</h1> &nbsp; <h1 className='text-secondary-100'>dinero,</h1>
          </div>
          <div className="flex">
            <h1>cosecha tu</h1> &nbsp; <h1 className='text-secondary-100'>libertad.</h1>
          </div>
        </div>
        <div className='absolute -translate-x-1/2 left-1/2 bottom-14'>
          <div className='flex gap-4'>
            <Button onClick={() => scrollTo("form")} className="w-48">Invertir</Button>
            <Button onClick={() => scrollTo("form")} minimal className="w-48">Más Información</Button>
          </div>
        </div>
      </div>
      <div className='py-8 text-center'>
        <h1 className='text-3xl'>Forma parte de la familia</h1>
        <h1 className='text-lg'>En Cultivalia trabajamos arduamente para ofrecer productos de la mejor calidad</h1>
      </div>
      <div className='relative w-full'>
        <img src={Vaquero} className='object-cover size-full' />
        <div style={{ boxShadow: "inset 0 -60px 25px -30px #1b6c41" }} className='absolute top-0 size-full'></div>
      </div>
      <div id="form" className='py-8 text-center text-white bg-primary-400'>
        <h1 className='text-3xl'>¿Quieres invertir?</h1>
        <p className='text-lg'>Envia tus datos y muy pronto nos pondremos en contacto contigo</p>
        <div className={``}>
          <Formik initialValues={{ nombre: "" }}>
            <div className='flex flex-col gap-4 px-10 py-10'>
              <Input label="Nombre" name="nombre" />
              <Input label="Correo electrónico" name="email" />
              <Input label="Telefono" name="phone" />
              <Options label="Estoy interesado en" name="interest" options={[
                { label: "Invertir", value: "invertir" },
                { label: "Conocer más", value: "conocer" },
              ]} />
              <Button secondary>Enviar</Button>
            </div>
          </Formik>
        </div>
      </div>
    </>
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

  const Page = () => {
    switch (selectedTab) {
      case "Princial":
        return <Home />
      case "Conócenos":
        return <Conocenos />
      case "Invierte":
        return <Invierte />
    }
  }

  return <>
    <AppBar></AppBar>
    <Page />
  </>
}

export default App
