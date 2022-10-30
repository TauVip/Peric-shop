import { products } from '../data'
import ProductHome from './ProductHome'
import '../styles/productsHome.css'

const ProductsHome = () => {
  return (
    <div className='hps-container'>
      <h2>Latest Products</h2>
      <div className='hps-row'>
        {products.slice(0, 8).map(item => (
          <ProductHome item={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}
export default ProductsHome
