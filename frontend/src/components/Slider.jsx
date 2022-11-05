import {
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import logger from 'use-reducer-logger'
//import { sliderItems } from '../data'
import '../styles/slider.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, slider: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const Slider = () => {
  const [{ loading, error, slider }, dispatch] = useReducer(logger(reducer), {
    slider: [],
    loading: true,
    error: ''
  })

  const [slideIndex, setSlideIndex] = useState(0)
  //const [slider, setSlider] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })

      try {
        const result = await axios.get('/api/slider')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }

      //setSlider(result.data)
    }
    fetchData()
  }, [])

  const handleClick = direction => {
    if (direction === 'left') setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  }

  return (
    <div className='s-container'>
      <div className='s-arrow left' onClick={() => handleClick('left')}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </div>
      <div
        className='wrapper'
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {slider.map(item => (
          <div className='slide' key={item._id}>
            <div className='img-container'>
              <img src={item.image} alt='' className='s-img' />
            </div>
          </div>
        ))}
      </div>
      <div className='s-arrow right' onClick={() => handleClick('right')}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </div>
    </div>
  )
}
export default Slider
