import Footer from './Footer'
import LoadingBox from './LoadingBox'
import Navbar from './Navbar'
import '../styles/orderDetails.css'
import MessageBox from './MessageBox'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Store } from '../Store'
import { useNavigate } from 'react-router-dom'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const OrderDetails = () => {
  const { state } = useContext(Store)
  const { userInfo } = state
  const navigate = useNavigate()
  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  })

  useEffect(() => {
    if (!userInfo) return navigate('/login')
  }, [navigate, userInfo])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <>
      <Navbar />

      <div className='order-details-container'></div>

      <Footer />
    </>
  )
}
export default OrderDetails
