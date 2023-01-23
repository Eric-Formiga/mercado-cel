import React from 'react'

//routes
import {Switch, Route} from "react-router-dom"
//components
import Store from "./Pages/Store"
import Cart from "./Pages/Cart"

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/' component={Store}/>
      </Switch>
    </div>
  )
}

export default Content
