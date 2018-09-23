import React, { Component } from 'react';
import Cartbtn from "./Cartbtn.js";
import Cart from "./Cart.js"
import './css/App.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {

  constructor(){
    super();

    this.state={
      showCart: false,
    }

    this.cartBtnClicked = this.cartBtnClicked.bind(this)
  }


  cartBtnClicked = ()=>{
    console.log("cartbtn clicked")
    this.setState({
      showCart:true
    })
  }



  render() {

    console.log(this.state.showCart)
    return (
      <div className="App">

          <Cartbtn cartBtnClicked={this.cartBtnClicked}/>

          <Cart showCart={this.state.showCart}/>


      </div>
    );
  }
}

export default App;
