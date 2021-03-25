import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import {createStore,compose,applyMiddleware} from 'redux'
import "./assets/css/style.css";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/rootReducer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
