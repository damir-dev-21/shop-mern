import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/header/logo.png";
import { Products } from "../components/Products";
import {products} from '../assets/constants/data';
import { useDispatch } from "react-redux";
import {getProducts} from '../redux/actions/products'

export const ProductsPage = () => {

  const dispatch = useDispatch()

  const [product,setProduct] = useState(products)


  useEffect(()=>{
    dispatch(getProducts(product))
  },[])

  return (
    <div>
      <header className="header-product">
        <div className="header__body__logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header-product-title">
          <h3>Products</h3>
        </div>
      </header>
      <main className=" products-main">
        <Products products={product}/>
        {/* <div className="products-screen ">
          <div className="products-screen__body">
            <div className="products-screen__body__item">
              <div className="product__title">
                <p>Men</p>
                <div className="line"></div>
              </div>

              <div className="product__content">
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="31">31</option>
                      <option value="31">32</option>
                      <option value="31">33</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/1.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">T-SHIRT</h3>
                    <p className="price">5,00€</p>
                  </div>
                </div>
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/2.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">Pants FORCLAZ</h3>
                    <p className="price">30,00€</p>
                  </div>
                </div>
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/3.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">backpack</h3>
                    <p className="price">60,00€</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-screen__body__item">
              <div className="product__title">
                <div className="line"></div>
                <p>Woman</p>
              </div>

              <div className="product__content">
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="31">31</option>
                      <option value="31">32</option>
                      <option value="31">33</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/4.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">Giacket</h3>
                    <p className="price">60,00€</p>
                  </div>
                </div>
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/5.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">trekking shoes</h3>
                    <p className="price">80,00€</p>
                  </div>
                </div>
                <div className="product__content__item">
                  <div className="product__content__item__size">
                    <select aria-label="size" aria-placeholder="Size">
                      <option disabled selected>
                        Size
                      </option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                    <div className="product__content__item__size__color">
                      <div className="box yellow"></div>
                      <div className="box blue"></div>
                      <div className="box black"></div>
                    </div>
                  </div>
                  <div className="product__content__item__img">
                    <img src="../images/products/6.png" alt="product" />
                  </div>
                  <div className="product__content__item__data">
                    <h3 className="name">T-shirt</h3>
                    <p className="price">20,00€</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
