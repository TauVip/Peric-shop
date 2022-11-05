import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Store } from '../Store'
import '../styles/cart.css'

const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const {
    cart: { cartItems }
  } = state

  return (
    <>
      <Navbar />

      <div className='cart-container'>
        <div className='cart-row'>
          <h2 className='cart-title'>Shopping Cart</h2>
        </div>
        <div className='cart-row'>
          <div className='cart-col'>
            {cartItems.length === 0 ? (
              <h3 className='info'>
                Cart is empty. <Link to='/shop'>Go Shopping</Link>
              </h3>
            ) : (
              <div className='cart-cards'>
                {cartItems.map(item => (
                  <div className='cart-card' key={item._id}>
                    <div className='cart-header'>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='cart-col'></div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Cart
