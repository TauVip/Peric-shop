import { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Store } from '../Store'
import '../styles/wish.css'

const Wish = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const {
    wish: { wishItems }
  } = state

  return (
    <>
      <Navbar />

      <div className='wish-container'>
        <div className='wish-row'>
          <h2 className='wish-title'>My Wish List</h2>
        </div>
        <div className='wish-row'>
          <div className='wish-col'></div>
          <div className='wish-col'></div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Wish
