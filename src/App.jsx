import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Shared/Navbar'
import Footer from './component/Shared/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
