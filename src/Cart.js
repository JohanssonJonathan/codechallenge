import React, { Component } from 'react';
import "./css/App.css";
import './css/cart.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Cart extends Component {

  constructor(){
    super();
    this.state={
      content:false,
      displayOrNot:"none"
    }
  }

  componentDidMount(){

  }

  render() {

    return (

      <React.Fragment>
            <CSSTransition
            in={this.props.showCart}
            timeout={500}
            classNames="showCart"
            onEntered={() => {
                this.setState({
                  displayOrNot:"block"
                })
            }}
            >

              <div className="cart">

                <div>
                   <div id="yourCartText">Your shopping cart</div>
                </div>
                
                <div style={{display:this.state.displayOrNot }}>

                  <div className="productInfo">
                    <h5>Product</h5>
                    <h5>Quantity</h5>
                    <h5>Price</h5>
                  </div>
                  <ul>
                      <li>
                        <div className="image">
                          <img src="firewire.jpg" />
                          <div>
                          hfisdjfidsjfi
                          </div>
                        </div>
                        <div className="selectAmount">
                            hej
                        </div>
                        <div className="price">
                            17000
                        </div>
                      </li>
                      <li>

                        <div className="image">
                          <img src="firewire2.jpg" />
                          </div>
                          <div className="selectAmount">
                              hej
                          </div>
                          <div className="price">
                              17000
                          </div>
                        </li>

                  </ul>
                </div>
              </div>

          </CSSTransition>





      </React.Fragment>
    );
  }
}

export default Cart;
