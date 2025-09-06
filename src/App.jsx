
import  Navbar  from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOder/PlaceOder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'

function App() {
  

  return (
    <>
    
    <div className="app">
    <Navbar/>

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
