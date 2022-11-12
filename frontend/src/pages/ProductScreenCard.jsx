import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Store } from '../Store'
import '../styles/productScreenCard.css'

const ProductScreenCard = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, wish } = state
  const navigate = useNavigate()

  const [selectedImage, setSelectedImage] = useState('')

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1

    const { data } = await axios.get(`/api/products/slug/${product.slug}`)
    if (data.countInStock < quantity)
      return alert('Sorry. Product is out of stock!')

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity }
    })

    navigate('/cart')
  }

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find(x => x._id === product._id)
    const quantity = existItem ? existItem.quantity : 1

    if (existItem)
      return alert(
        'Sorry. You have already added the product to your wish list.'
      )

    ctxDispatch({
      type: 'WISH_ADD_ITEM',
      payload: { ...product, quantity }
    })

    navigate('/wish')
  }

  return (
    <>
      <Navbar />
      <div className='screen-container'>
        <div className='screen-row'>
          <div className='screen-col'>
            <div className='screen-images'>
              <div className='screen-top'>
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={selectedImage || product.image}
                      alt={product.title}
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
              <div className='screen-bottom'>
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => setSelectedImage(product.image)}
                />
                <img
                  src={product.image1}
                  alt={product.title}
                  onClick={() => setSelectedImage(product.image1)}
                />
                <img
                  src={product.image2}
                  alt={product.title}
                  onClick={() => setSelectedImage(product.image2)}
                />
                <img
                  src={product.image3}
                  alt={product.title}
                  onClick={() => setSelectedImage(product.image3)}
                />
              </div>
            </div>
          </div>
          <div className='screen-col'>
            <div className='first-div div'>
              <h2 className='title'>{product.title}</h2>
              <p className='category'>{product.category}</p>
            </div>
            <div className='second-div div'>
              <span className='price'>Price ${product.price}</span>
              <div className='quantity'>Quantity: 1</div>
            </div>
            <div className='third-div div'>
              <p className='desc'>{product.desc}</p>
            </div>
            <div className='fourth-div div'>
              {product.countInStock === 0 ? (
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
      </div>
      <Footer />
    </>
  )
}
export default ProductScreenCard
