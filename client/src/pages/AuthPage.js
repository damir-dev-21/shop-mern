import React, { useEffect } from "react";
import {auth} from  '../assets/scripts/auth'



export const Auth = () => {

  useEffect(()=>{
    auth()
  },[])

  return (
    <div className="login">
      <div className="wrapper right-panel-active">
        <div className="wrapper__form wrapper--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="wrapper__form wrapper--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <a href="#" className="link">
              Forgot your password?
            </a>
            <button className="btn" >Sign In</button>
          </form>
        </div>

        <div className="wrapper__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn" >
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp"  >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
