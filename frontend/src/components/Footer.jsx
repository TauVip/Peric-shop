import { NavLink } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='f-container'>
      <div className='f-row'>
        <div className='f-col'>
          <img src='/images/logo/logo.png' alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            facere quam nisi incidunt voluptas unde repellendus, eius possimus,
            molestiae molestias hic fugiat minus, nesciunt totam ipsum in.
            Nobis, eligendi est?
          </p>
        </div>
        <div className='f-col'>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='f-col'>
          <h2>Category</h2>
          <ul>
            <li>
              <NavLink to='/'>Men</NavLink>
            </li>
            <li>
              <NavLink to='/'>Women</NavLink>
            </li>
            <li>
              <NavLink to='/'>Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className='f-col'>
          <h2>Stay in touch with us</h2>
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
      <div className='f-copyrow'>
        <p>&copy; 2022. All Right Reserved. Powered by Miljan Peric.</p>
      </div>
    </div>
  )
}
export default Footer
