import './App.css'
import ShoppingCart from './components/ShoppingCart'
import ShopDetails from './components/ShopDetails'
import Shop from './components/Shop'
import Home from './components/Home'
import Header from './components/Header'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/ShopDetails" element={<ShopDetails/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        <Route path="/Checkout" element={<Checkout/>} />

      </Routes>
      <Footer />
    </>


  )
}





export default App