import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'


export const router = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={ProductsPage} exact/>
            <Route path="/cart" component={Cart} exact/>
            <Route path="/auth" component={Auth}/>
        </Switch>
    )
}