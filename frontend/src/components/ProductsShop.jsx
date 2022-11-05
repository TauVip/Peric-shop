import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { products } from '../data'
import ProductShop from './ProductShop'
import '../styles/productsShop.css'
import ReactPaginate from 'react-paginate'

const ProductsShop = () => {
  const [data, setData] = useState(products)
  const [category, setCategory] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  const productPerPage = 3
  const pagesVisited = pageNumber * productPerPage

  const displayProducts = data
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map(item => <ProductShop item={item} key={item._id} />)

  const pageCount = Math.ceil(data.length / productPerPage)

  const changePage = ({ selected }) => setPageNumber(selected)

  const filterResult = cartItem => {
    const result = products.filter(curDate => curDate.category === cartItem)
    setData(result)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/category')
      setCategory(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className='shop-container'>
      <div className='shop-row'>
        <div className='shop-col'>
          <h2>Category</h2>
          <button className='shop-btn' onClick={() => setData(products)}>
            All <FontAwesomeIcon icon={faChevronRight} />
          </button>
          {category.map(item => (
            <button
              className='shop-btn'
              onClick={() => filterResult(item.title)}
              key={item._id}
            >
              {item.title} <FontAwesomeIcon icon={faChevronRight} />
            </button>
          ))}
        </div>
        <div className='shop-col'>
          <div className='shop-products'>{displayProducts}</div>
          <div className='shop-pagination'>
            <ReactPaginate
              previousLabel='<<'
              nextLabel='>>'
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName='paginationBttns'
              previousLinkClassName='previousBttns'
              nextLinkClassName='nextBttn'
              disabledClassName='paginationDisabled'
              activeClassName='paginationActive'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsShop
