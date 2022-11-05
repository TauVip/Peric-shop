import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store'
import '../styles/productShop.css'

const ProductShop = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, wish } = state

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
    <div className='ps-card'>
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
        <button>
          <FontAwesomeIcon icon={faHeart} onClick={addToWishHandler} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler} />
        </button>
      </div>
    </div>
  )
}
export default ProductShop
