import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { Store } from '../Store'
import '../styles/quick.css'

const Quick = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, wish } = state

  const [selectedImage, setSelectedImage] = useState('')
  const [style, setStyle] = useState('main-container')

  const changeStyle = () => {
    setStyle('main-containerOne')
  }

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
    <div className={style}>
      <div className='card-quick' key={item._id}>
        <div className='card-row'>
          <div className='card-images'>
            <div className='card-top'>
              <img src={selectedImage || item.image} alt={item.title} />
            </div>
            <div className='card-bottom'>
              <img
                src={item.image}
                alt={item.title}
                onClick={() => setSelectedImage(item.image)}
              />
              <img
                src={item.image1}
                alt={item.title}
                onClick={() => setSelectedImage(item.image1)}
              />
              <img
                src={item.image2}
                alt={item.title}
                onClick={() => setSelectedImage(item.image2)}
              />
              <img
                src={item.image3}
                alt={item.title}
                onClick={() => setSelectedImage(item.image3)}
              />
            </div>
          </div>
        </div>
        <div className='card-row'>
          <div className='first-div div'>
            <h2 className='title'>{item.title}</h2>
            <p className='category'>{item.category}</p>
          </div>
          <div className='second-div div'>
            <span className='price'>Price ${item.price}</span>
            <div className='quantity'>Quantity: 1</div>
          </div>
          <div className='third-div div'>
            <p className='desc'>{item.desc}</p>
          </div>
          <div className='fourth-div div'>
            {item.countInStock === 0 ? (
              <button className='cart cart-out' disabled>
                Out of stock
              </button>
            ) : (
              <button className='cart' onClick={addToCartHandler}>
                Add to Cart
              </button>
            )}
            <button className='wish' onClick={addToWishHandler}>
              Add to Wish
            </button>
          </div>
        </div>
      </div>
      <button className='back' onClick={changeStyle}>
        Close
      </button>
    </div>
  )
}
export default Quick
