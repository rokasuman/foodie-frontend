
import  Navbar  from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOder/PlaceOder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [login,setLogin] = useState(false)

  

  return (
    <>
    {login ? <LoginPopup setLogin = {setLogin}/> : <></>}
    <div className="app">
    <Navbar setLogin={setLogin}/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOder/>} />

    </Routes>
   </div>
   <AppDownload/>
   <Footer/>

    </>

   
    
   
  )
}

export default App
