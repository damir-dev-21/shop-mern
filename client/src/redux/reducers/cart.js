import { SET_CART, DELETE_ITEM, INCREASE, DECREASE } from "../actions/actionsType";

const initialState = {
  orders: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, actions) {
  function getTotalPrice() {
    return state.orders.reduce((summ, current) => summ + current.price, 0);
  }

  function incrOrder(id) {
    // let or = state.orders.filter(item=>item.id != id)
    
    // const order = state.orders.find((item) => item.id === id);
    // const orderCount = order.count + 1;
    // order.count = orderCount
    // or.push(order)

    // let arr = [...state.orders.filter(item=>item.id !== id)];
    // let order = state.orders.find(item=>item.id === id);
    // order.count += 1
    // arr.push(order)

    let a = [...state.orders]

    // let order = state.orders.find(item=>item.id === id);
    // order.count += 1
    // let orderIdx = state.orders.indexOf(order)

    // a.splice(orderIdx,1)

    // a.push(order)

    a.find(item=>item.id === id).count++

    return a;
  }

  function decrOrder(id){
    let a = [...state.orders]
    let orderCount = a.find(item=>item.id === id).count
    if(orderCount > 1){
      a.find(i=>i.id===id).count--
    }

    return a
  }

  switch (actions.type) {
    case SET_CART:
      return {
        ...state,
        orders: state.orders.find(item=>item.id === actions.order.id) ? [...state.orders] : [...state.orders, actions.order],
        totalPrice: getTotalPrice(),
      };
    case INCREASE:
      return {
        ...state,
        orders:incrOrder(actions.id)
      };
    case DECREASE:
      return {
        ...state,
        orders:decrOrder(actions.id)
      }

    case DELETE_ITEM:
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== actions.idx),
      };
    default:
      return {
        ...state,
      };
  }
}
