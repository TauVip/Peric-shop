import Banners from '../components/Banners'
import CategoryMain from '../components/CategoryMain'
import Navbar from '../components/Navbar'
import ProductsHome from '../components/ProductsHome'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banners />
      <CategoryMain />
      <ProductsHome />
    </div>
  )
}
export default Home
