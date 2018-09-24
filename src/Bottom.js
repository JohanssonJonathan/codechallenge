import React, { Component } from 'react';
import "./css/App.css";
import './css/bottom.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Bottom extends Component {

constructor(){
  super();
}


render() {

    return(

      <div className="bottom">
        <div onClick={this.props.resetValues}>
            <span>Continue shopping</span>
          </div>
        <div onClick={this.props.resetValues}>
          <img src="./surf.svg"/>
          <span>Checkout</span>
        </div>
      </div>

    )

  }
}

export default Bottom;
