import {
  faArrowRightToBracket,
  faHeart,
  faShoppingBag,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='n-container'>
      <div className='n-row'>
        <div className='n-col'>
          <span className='n-email'>ricpewebcode@gmail.com</span>
          <span>
            <FontAwesomeIcon icon={faUser} /> Guest
          </span>
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
            <a href='/login'>
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
              </span>
            </a>
            <a href='/wish'>
              <span>
                <FontAwesomeIcon icon={faHeart} />
                <span className='totalItems'>0</span>
              </span>
            </a>
            <a href='/cart'>
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className='totalItems'>0</span>
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
