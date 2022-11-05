import { useReducer } from 'react'
import { createContext } from 'react'

export const Store = createContext()

const initialState = {
  cart: {
    cartItems: []
  },
  wish: {
    wishItems: []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        item => item._id === newItem._id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map(item =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      return { ...state, cart: { ...state.cart, cartItems } }
    case 'WISH_ADD_ITEM':
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems: [...state.wish.wishItems, action.payload]
        }
      }
    default:
      break
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
