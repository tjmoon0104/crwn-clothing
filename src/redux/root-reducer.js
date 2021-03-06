import { combineReducers } from 'redux'

import userReducers from './user/user.reducers'
import cartReducer from './cart/cart.reducers'

export default combineReducers({
  user: userReducers,
  cart: cartReducer,
})
