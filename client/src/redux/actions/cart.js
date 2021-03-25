import { DELETE_ITEM, SET_CART,INCREASE,DECREASE } from "./actionsType"

export const setCart = (item) => {
    return{
        type:SET_CART,
        order:item
    }
}

export const incrItem = (id) => {
    return{
        type:INCREASE,
        id
    }
}

export const decrItem = (id) => {
    return{
        type:DECREASE,
        id
    }
}

export const deleteItem = (idx) => {
    return{
        type:DELETE_ITEM,
        idx
    }
}