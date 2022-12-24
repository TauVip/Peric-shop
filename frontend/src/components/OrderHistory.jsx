import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/orderhistory.css'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import { useContext } from 'react'
import { Store } from '../Store'
import { useNavigate } from 'react-router-dom'
import { useReducer } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { getError } from '../utils'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const OrderHistory = () => {
  const { state } = useContext(Store)
  const { userInfo } = state
  const navigate = useNavigate()
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })

      try {
        const { data } = await axios.get('/api/orders/mine', {
          headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error)
        })
      }
    }
    fetchData()
  }, [userInfo.token])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <>
      <Navbar />

      <div className='orderhistory-container'>
        <div className='orderhistory-row'>
          <div className='orderhistory-col'>
            <h2 className='orderhistory-title'>Order History</h2>
          </div>
        </div>
        <div className='orderhistory-row'>
          <div className='orderhistory-col'>
            <div className='tables'>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice.toFixed(2)}</td>
                      <td>
                        {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}
                      </td>
                      <td>
                        {order.isDelivered
                          ? order.deliveredAt.substring(0, 10)
                          : 'No'}
                      </td>
                      <td>
                        <button
                          variant='light'
                          onClick={() => navigate(`/order/${order._id}`)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default OrderHistory
