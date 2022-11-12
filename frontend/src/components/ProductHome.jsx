import {
  faEye,
  faHeart,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store'
import '../styles/productHome.css'
import Quick from './Quick'

const ProductHome = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, wish } = state

  const [open, setOpen] = useState(false)

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find(x => x._id === item._id)
    const quantity = existItem ? existItem.quantity + 1 : 1

    const { data } = await axios.get(`/api/products/slug/${item.slug}`)
    if (data.countInStock < quantity)
      return alert('Sorry. Product is out of stock!')

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }
    })
  }

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find(x => x._id === item._id)
    const quantity = existItem ? existItem.quantity : 1

    if (existItem)
      return alert(
        'Sorry. You have already added the product to your wish list.'
      )

    ctxDispatch({
      type: 'WISH_ADD_ITEM',
      payload: { ...item, quantity }
    })
  }

  return (
    <div className='hp-card'>
      <div className='card-header'>
        <Link to={`/product/${item.slug}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className='card-body'>
        <h3 className='title'>{item.title}</h3>
        <span>${item.price}</span>
      </div>
      <div className='card-footer'>
        <button onClick={() => setOpen(true)} className='eye'>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} onClick={addToWishHandler} />
        </button>
        {item.countInStock === 0 ? (
          <button className='cart cart-out' disabled>
            Out of stock
          </button>
        ) : (
          <button>
            <FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler} />
          </button>
        )}
      </div>
      {open && <Quick item={item} />}
    </div>
  )
}
export default ProductHome
