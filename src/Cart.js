import React, { Component } from 'react';
import "./css/App.css";
import './css/cart.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Bottom from "./Bottom.js"

class Cart extends Component {

  constructor(){
    super();
    this.state={
      content:false,
      displayOrNot:"none",
      totalCost:0,
      products:[
        {
          name:"Firewire vågsurfingbräda Unibrow Timbertek (FCSII)",
          img:"./firewire.jpg",
          amount:0,
          price:4999,
          info: "",
          size:["6'0", "6'1","6'2","6'4","6'6"]
        },
        {
          name:"Firewire vågsurfingbräda Spitfire Timbertek FCSII",
          img:"./firewire2.jpg",
          amount:0,
          price:3999,
          info: "Spitfire bygger på den så omtyckta Dominator från Firewire. Men med spitfire har shapern Dan Mann gjort några justeringar för att göra spitfire mer performance. Med ett stepdeck i slutet på brädans rail samt diamond tail så kan du pusha spitfire hårt på tailen i dina manövers utan att tappa kontroll! ",
          size:["5'8", "5'10","6'0","6'2","6'4","6'6"]

        }
      ]

    }

    this.resetValues = this.resetValues.bind(this)
  }



  checkAmount(operator, element){

      let newProductList = []
      let totalCost = this.state.totalCost;

      for(let i=0; i<this.state.products.length; i++){

        let name = this.state.products[i].name;
        let img = this.state.products[i].img;
        let amount = this.state.products[i].amount;
        let price = this.state.products[i].price;
        let size = this.state.products[i].size;


          if(operator === "-"){
            if(element.name === this.state.products[i].name){

              if(amount){
                totalCost -= price
              }
              newProductList.push({
                name:name,
                img: img,
                amount: amount === 0 ? amount : amount -1,
                price: price,
                size:size
              })
            }else{
              newProductList.push({
                name:name,
                img: img,
                amount: amount,
                price: price,
                size:size

              })
            }



          }else{
            if(element.name === this.state.products[i].name){


              totalCost += price

              newProductList.push({
                name:name,
                img: img,
                amount: amount +1,
                price: price,
                size:size

              })
            }else{

              newProductList.push({
                name:name,
                img: img,
                amount: amount,
                price: price,
                size:size

              })
            }

          }
      }


      this.setState({
        totalCost:totalCost,
        products:newProductList
      })




  }


  createList = () => {
    const { products } = this.state;

    return products.map((element, i) => (
      <li key={i}>
        <div className="image">
          <div>
          <img src={element.img} />
          </div>
          <div>
            <h4>{element.name}</h4>

            <select name="Size">
              {element.size.map((size,index)=>
                <option key={index} value={size}> {size} </option>
              )}
            </select>

          </div>
        </div>
        <div className="selectAmount">
          <button onClick={e=>this.checkAmount("-", element, i)}>-</button>
            {element.amount}
          <button onClick={e=>this.checkAmount("+", element)}>+</button>
        </div>
        <div className="price">
          {element.price} :-
        </div>
      </li>
    )
  )}


  resetValues(){

    let newProductList = []

    this.state.products.map(element => {

      newProductList.push({
        name:element.name,
        img:element.img,
        amount:0,
        price:element.price,
        info: element.info,
        size:element.size
      })
    })
    this.setState({
      totalCost:0,
      products:newProductList
    })
    this.props.cartBtnClicked("checkout")
  }


  render(){

    const list = this.createList();

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
                    { list }
                  </ul>

                  <div className="totalCostInfo">
                      <h5>If you buy for more than 15000 you get an 10% discount</h5>
                      <div id="totalCost">
                        <h3>Total</h3>
                      </div>
                      <div id="totalCostMenu">

                        {this.state.totalCost <= 15000 ?
                          <div>
                            <span>Total price: {this.state.totalCost}</span>
                          </div>
                          :
                          <div>
                            <span>{this.state.totalCost}</span>
                            <span id="disc"> - {Math.round(this.state.totalCost *0.1)}</span>
                            <span id="totalCostPrice">Total price: { Math.round(this.state.totalCost - (this.state.totalCost *0.1))}</span>
                          </div>
                        }


                      </div>
                  </div>
                  <Bottom  resetValues={this.resetValues} cartBtnClicked={this.props.cartBtnClicked}/>

                </div>


              </div>


          </CSSTransition>
      </React.Fragment>
    );
  }
}

export default Cart;
