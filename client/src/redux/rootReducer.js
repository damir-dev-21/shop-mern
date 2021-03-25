import {combineReducers} from 'redux'
import ProductsReducer from '../redux/reducers/products'
import cartReducer from './reducers/cart'


export default combineReducers({
    products:ProductsReducer,
    cart:cartReducer
})