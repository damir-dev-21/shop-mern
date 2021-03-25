import React,{useState,useEffect} from "react";
import { Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Home } from "./pages/HomePage";
import { Cart } from "./pages/CartPage";
import { Auth } from "./pages/AuthPage";
import { ProductsPage } from "./pages/ProductsPage";

import {products} from './assets/constants/data'
import {getProducts} from './redux/actions/products'
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch()

  const [product,setProduct] = useState(products)

  
  useEffect(()=>{
    dispatch(getProducts(product))
  },[])
  
  const pr = useSelector(state=>state.products.products)

  console.log(pr);

  return (
    <div>
      <MainPage>
        <Route path="/" render={()=><Home products={product}/>} exact />
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/auth" component={Auth} />
      </MainPage>
    </div>
  );
}

export default App;
