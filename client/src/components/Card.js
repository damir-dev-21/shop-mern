import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/actions/cart";

export const Card = ({ title, price, size, img, id }) => {
  const dispatch = useDispatch();

  const [countSize, setCountSize] = useState({ label: size[0].label, value: size[0].value });
  const [product, setProduct] = useState({
    title: title,
    price: price,
    size: countSize.label,
    image: img,
    count: 1,
    id: id,
  });

  const addCart = () => {
    dispatch(setCart(product));
  };

  const addCountSize = (size) => {
    const product = {
      title: title,
      price: price,
      size: size.label,
      image: img,
      count: 1,
      id: id,
    };

    setCountSize(size);
    setProduct(product);
  };

  return (
    <div className="product__content__item">
      <div className="product__content__item__size">
        {/* <select aria-label="size" aria-placeholder="Size">
                  <option disabled selected>
                    Size
                  </option>
                  
                  
                 
                </select> */}
        <div style={{ width: "100px" }}>
          <Select
            placeholder="Size"
            value={countSize}
            onChange={addCountSize}
            options={size}
          />
        </div>
        <div className="product__content__item__size__color">
          <div className="box yellow"></div>
          <div className="box blue"></div>
          <div className="box black"></div>
        </div>
      </div>
      <div className="product__content__item__img">
        <img src={img} alt="product" />
      </div>
      <div className="product__content__item__data">
        <h3 className="name">{title}</h3>
        <p className="price">{price}€</p>
        <button className="buy" onClick={addCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
