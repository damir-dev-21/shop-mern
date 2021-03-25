import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/header/logo.png";
import cart from "../assets/images/header/cartIcon.png";
import down from "../assets/images/main/down.png";
import twitter from "../assets/images/other/fa-twitter.png";
import {script} from '../assets/scripts/script'
import { Category } from "../components/Category";
import { Products } from "../components/Products";


export class Home extends Component{

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount(){
    script()
  }
  
  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  render() {
    const products = this.props.products
    return(
      <>
      <section className="trekking">
        <section className="main">
          <header className="header container">
            <div className="header__body">
              <div className="header__body__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="header__body__links">
                <ul className="header__body__links__nav">
                  <li>
                    <NavLink to="/" className="header__body__links__nav__item">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className="header__body__links__nav__item"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth" className="header__body__links__nav__item">
                      Login / Reg
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className="header__body__links__nav__item">
                      <img src={cart} alt="cart" />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="toggle">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </header>
          <div className="main-screen container">
            <h2>Our clothing , your comfort</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="down" onClick={this.scrollToBottom}>
              <img src={down} alt="down" />
            </div>
          </div>
        </section>

        <main>
          <div ref={(el) => { this.messagesEnd = el; }}>

          </div>
          <Category />

          <Products products={products}/>

          <div className="about-screen ">
            <fieldset>
              <legend>ABOUT US</legend>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                nostrum voluptate? Culpa perspiciatis molestias minima? Maxime
                ex, nemo quas nihil ducimus eaque non? Itaque vitae delectus
                cupiditate
              </p>
            </fieldset>
          </div>
        </main>

        <footer className="footer ">
          <div className="footer__top">
            <div className="footer__top__img">
              <img src={twitter} alt="" />
            </div>
            <div className="footer__top__text">
              <p>“ E-commerce psd theme available ”</p>
            </div>
          </div>

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
      </section>
    </>
 
    )
  }
}

// export function Home({products}) {
//   return (
//     <>
//       <section className="trekking">
//         <section className="main">
//           <header className="header container">
//             <div className="header__body">
//               <div className="header__body__logo">
//                 <img src={logo} alt="logo" />
//               </div>
//               <div className="header__body__links">
//                 <ul className="header__body__links__nav">
//                   <li>
//                     <NavLink to="/" className="header__body__links__nav__item">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/products"
//                       className="header__body__links__nav__item"
//                     >
//                       Products
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/auth" className="header__body__links__nav__item">
//                       Login / Reg
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/cart" className="header__body__links__nav__item">
//                       <img src={cart} alt="cart" />
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </header>
//           <div className="main-screen container">
//             <h2>Our clothing , your comfort</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <div className="down">
//               <img src={down} alt="down" />
//             </div>
//           </div>
//         </section>

//         <main>
//           <Category />

//           <Products products={products}/>

//           <div className="about-screen ">
//             <fieldset>
//               <legend>ABOUT US</legend>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
//                 nostrum voluptate? Culpa perspiciatis molestias minima? Maxime
//                 ex, nemo quas nihil ducimus eaque non? Itaque vitae delectus
//                 cupiditate
//               </p>
//             </fieldset>
//           </div>
//         </main>

//         <footer className="footer ">
//           <div className="footer__top">
//             <div className="footer__top__img">
//               <img src={twitter} alt="" />
//             </div>
//             <div className="footer__top__text">
//               <p>“ E-commerce psd theme available ”</p>
//             </div>
//           </div>

//           <div className="footer__bottom">
//             <div className="footer__bottom__left">
//               <h3>TREKKING</h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>
//             <div className="footer__bottom__right">
//               <ul>
//                 <li>Credits</li>
//                 <li>Privacy</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//               <p>Design by gianluca cosetta</p>
//               <p>Created by Damir Tuychiev</p>
//             </div>
//           </div>
//         </footer>
//       </section>
//     </>
//   );
// }
