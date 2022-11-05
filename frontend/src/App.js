import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductScreen from './pages/ProductScreen'
import Shop from './pages/Shop'
import Wish from './pages/Wish'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:slug' element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
