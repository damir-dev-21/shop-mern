import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/header/logo.png";
import { CartItem } from "../components/CartItem";

export const Cart = () => {

  const [totalPrice,setTotalPrice] = useState(0)

  const cart = useSelector((state) => state.cart.orders);
  

  const getTotalPrice = () => {
    const price = cart.reduce((sum,current)=>sum+(current.count*+current.price),0);
    setTotalPrice(price)
    return cart.reduce((sum,current)=>current.count*sum+current.price,0);
  }

  useEffect(()=>{
    getTotalPrice()
  },[cart])

  

  return (
    <div>
      <header className="header-product">
        <div className="header__body__logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header-product-title">
          <h3>Cart</h3>
        </div>
      </header>

      <main>
        <div className="cart">
          {!cart.length ? (
            <div classNameName="cart emptyCart">Корзина пуста</div>
          ) : (
            cart.map((item, index) => {
              return (
                <CartItem
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  count={item.count}
                  size={item.size}
                  id={item.id}
                />
              );
            })
          )}
        </div>

        <div className="total">
          <p style={{display:'flex',alignItems:'center'}}>
            Всего:<span className="total-price">{totalPrice} </span>€
          </p>
          <button className="total-buy">Приобрести</button>
        </div>
      </main>

      <footer className="footer ">
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <h3>TREKKING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="footer__bottom__right">
            <ul>
              <li>Credits</li>
              <li>Privacy</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <p>Design by gianluca cosetta</p>
            <p>Created by Damir Tuychiev</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
