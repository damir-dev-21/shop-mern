import { CHANGE_CATEGORY, DEFAULT_CATEGORY, GET_PRODUCTS } from "../actions/actionsType";
import { products } from "../../assets/constants/data";

const initialState = {
  products: products,
  filterProducts: products,
};

export default function ProductsReducer(state = initialState, action) {
  function setCategory(value) {
    return state.products.filter((i) => i.category === value);
  }

  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.items,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        filterProducts: setCategory(action.value),
      };
    case DEFAULT_CATEGORY:
      return {
          ...state,
          filterProducts:state.products
      }  
    default:
      return {
        ...state,
      };
  }
}
