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
      cartbtn:true,
    }
    this.cartBtnClicked = this.cartBtnClicked.bind(this);
}


cartBtnClicked = (checkout)=>{

  if(checkout){
    this.setState({
      showCart:false,
      cartbtn:true
    })
  }else{
    this.setState({
      showCart:true,
      cartbtn:false
    })
  }
}





render() {

    return (
      <div className="App">

        <Cartbtn showBtn={this.state.cartbtn} cartBtnClicked={this.cartBtnClicked}/>
        <Cart cartBtnClicked={this.cartBtnClicked} showCart={this.state.showCart}/>

      </div>
    );
  }
}

export default App;
