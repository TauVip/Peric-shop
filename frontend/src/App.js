import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductScreen from './pages/ProductScreen'
import Shop from './pages/Shop'
import Wish from './pages/Wish'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Shipping from './components/Shipping'
import SignUp from './pages/SignUp'
import Payment from './pages/Payment'
import PlaceOrder from './pages/PlaceOrder'
import OrderDetails from './components/OrderDetails'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/order/:id' element={<OrderDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
