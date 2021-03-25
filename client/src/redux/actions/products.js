import { GET_PRODUCTS,CHANGE_CATEGORY,DEFAULT_CATEGORY } from "./actionsType"

export const getProducts = (items) => {
    return{
        type:GET_PRODUCTS,
        items
    }
}

export const setCategory = (value) => {
    return{
        type:CHANGE_CATEGORY,
        value
    }
}

export const allProducts = () => {
    return{
        type:DEFAULT_CATEGORY,
    }
}