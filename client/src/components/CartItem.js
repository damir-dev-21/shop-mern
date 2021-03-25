import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem,incrItem,decrItem } from "../redux/actions/cart";

export const CartItem = ({ title, price, image,count, size,id }) => {
  let [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const incr = () => {
    let c = counter + 1;
    setCounter(c);
    dispatch(incrItem(id))
  };

  const decr = () => {
    if (counter != 1) {
      let c = counter - 1;
      setCounter(c);
    }
    dispatch(decrItem(id))
  };

  const deleteCartItem = () => {
    dispatch(deleteItem(id));
  };

  useEffect(()=>{
  },[counter])

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={image} alt="" />
      </div>
      <div className="cart-item-detail">
        <h3>
          Name: <span className="cart-name"> {title}</span>
        </h3>
        <p>
          Price: <span className="cart-price"> {price}€</span>
        </p>
        <p>
          Size: <span className="cart-size"> {size}</span>
        </p>
        <p>
          Color: <span className="cart-color"> Blue</span>
        </p>
        <div className="cart-item-detail-btn">
          <div className="cart-btn-add">
            <span className="deg cart-btn" onClick={decr}>
              -
            </span>
            <span className="count">{count}</span>
            <span className="inc cart-btn" onClick={incr}>
              +
            </span>
          </div>
          <button className="cart-btn-buy" onClick={deleteCartItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
