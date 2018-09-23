import React, { Component } from 'react';
import "./css/App.css";
import './css/cart.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Cart extends Component {

  constructor(){
    super();
    this.state={
      content:false,
      displayOrNot:"none",
      products:[
        {
          name:"firewire",
          img:"./firewire.jpg",
          amount:0,
          price:1500
        },
        {
          name:"firewire2",
          img:"./firewire2.jpg",
          amount:0,
          price:2000
        }
      ]

    }
  }

  componentDidMount(){

  }

  // changeAmount(operator, product){
  //   if(operator === "-"){
  //     this.setState({
  //       product: this.state.product-1
  //     })
  //   }else{
  //     this.setState({
  //       product: this.state.product+1
  //     })
  //   }
  // }


  checkAmount(operator, element){

      let newProductList = []

      for(let i=0; i<this.state.products.length; i++){

        let name = this.state.products[i].name;
        let img = this.state.products[i].img;
        let amount = this.state.products[i].amount;
        let price = this.state.products[i].price;

          if(operator === "-"){
            if(element.name === this.state.products[i].name){


              newProductList.push({
                name:name,
                img: img,
                amount: amount === 0 ? amount : amount -1,
                price: price
              })
            }else{
              newProductList.push({
                name:name,
                img: img,
                amount: amount,
                price: price
              })
            }

          }else{
            if(element.name === this.state.products[i].name){


              newProductList.push({
                name:name,
                img: img,
                amount: amount +1,
                price: price
              })
            }else{
              newProductList.push({
                name:name,
                img: img,
                amount: amount,
                price: price
              })
            }
          }
      }

      this.setState({
        products:newProductList
      })

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

                    {this.state.products.map((element, i) => {

                      return (
                            <li key={i}>
                                  <div className="image">
                                    <img src={element.img} />
                                    <div>
                                    hfisdjfidsjfi
                                    </div>

                                    <div className="selectAmount">
                                        <button onClick={e=>this.checkAmount("-", element, i)}>-</button>
                                        {element.amount}
                                        <button onClick={e=>this.checkAmount("+", element)}>+</button>
                                    </div>
                                    <div className="price">
                                        {element.price}
                                    </div>
                                  </div>
                            </li>
                          )
                    })}

                  </ul>

                  <div className="totalCostInfo">
                      <h5>If you buy for more than 5000 you get an 10% discount</h5>
                      <div>

                      </div>
                  </div>

                </div>
              </div>

          </CSSTransition>





      </React.Fragment>
    );
  }
}

export default Cart;
