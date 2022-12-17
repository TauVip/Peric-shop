import {
  faArrowRightToBracket,
  faHeart,
  faShoppingBag,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Store } from '../Store'
import '../styles/navbar.css'

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart, wish, userInfo } = state

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
  }

  return (
    <div className='n-container'>
      <div className='n-row'>
        <div className='n-col'>
          <span className='n-email'>ricpewebcode@gmail.com</span>
          {userInfo ? (
            <Link to='account'>
              <FontAwesomeIcon icon={faUser} /> {userInfo.name}
            </Link>
          ) : (
            <span>
              <FontAwesomeIcon icon={faUser} /> Guest
            </span>
          )}
        </div>
        <div className='n-col'>
          <div className='socials'>
            <a href='/'>
              <img src='/images/socials/facebook.png' alt='facebook' />
            </a>
            <a href='/'>
              <img src='/images/socials/instagram.png' alt='instagram' />
            </a>
            <a href='/'>
              <img src='/images/socials/twitter.png' alt='twitter' />
            </a>
            <a href='/'>
              <img src='/images/socials/youtube.png' alt='youtube' />
            </a>
          </div>
        </div>
      </div>
      <div className='n-row'>
        <div className='n-col'>
          <a href='/'>
            <img src='/images/logo/logo.png' alt='' className='logo' />
          </a>
        </div>
        <div className='n-col'>
          <div className='icons'>
            {userInfo ? (
              <Link to='#signout' onClick={signoutHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowRightToBracket} /> LogOut
                </span>
              </Link>
            ) : (
              <a href='/login'>
                <span>
                  <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
                </span>
              </a>
            )}
            <a href='/wish'>
              <span>
                <FontAwesomeIcon icon={faHeart} />
                {wish.wishItems.length > 0 && (
                  <span className='totalItems'>{wish.wishItems.length}</span>
                )}
              </span>
            </a>
            <a href='/cart'>
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
                {cart.cartItems.length > 0 && (
                  <span className='totalItems'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
      <nav className='nav'>
        <ul className='items'>
          <li className='list'>
            <NavLink
              to='/'
              end
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Home
            </NavLink>
          </li>
          <li className='list'>
            <NavLink
              to='/shop'
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Shop
            </NavLink>
          </li>
          <li className='list'>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              About
            </NavLink>
          </li>
          <li className='list'>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className='btn'>BTN</button>
      </nav>
    </div>
  )
}
export default Navbar
