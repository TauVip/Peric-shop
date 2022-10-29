import {
  faEye,
  faHeart,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/productHome.css'

const ProductHome = ({ item }) => {
  return (
    <div className='hp-card'>
      <div className='card-header'>
        <img src={item.image} alt={item.title} />
      </div>
      <div className='card-body'>
        <h3 className='title'>{item.title}</h3>
        <span>${item.price}</span>
      </div>
      <div className='card-footer'>
        <button>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  )
}
export default ProductHome
