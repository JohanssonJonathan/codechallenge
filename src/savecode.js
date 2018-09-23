import React, { Component } from 'react';
import "./css/App.css";
import './css/cartbtn.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Cartbtn extends Component {

  constructor(){
    super();
    this.state={
      animate : false,
    }
  }

  componentDidMount(){
    requestAnimationFrame(() => {
      this.setState({ animate: true });
    });
  }

  leaveCartBtnComponent = ()=>{
    requestAnimationFrame(() => {
      this.setState({ animate: false });
    });
    this.props.cartBtnClicked();

  }


  render() {
    return (

      <ReactCSSTransitionGroup transitionName="viewCart" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>

        <div className="startBtn">
          <button id="viewCart" onClick={this.leaveCartBtnComponent} style={
              {
              opacity:this.state.animate ? 1 : 0,
              top:this.state.animate ? "0px" : "-100px",
              }
            }>
            View cart
          </button>

          <div id="line" style={
              {
              width:this.state.animate ? "100px" : "0",

              transition: "width 0.2s ease-out 0.8s,",
              }
            }></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Cartbtn;
