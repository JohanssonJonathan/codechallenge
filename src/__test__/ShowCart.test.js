import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App"
import Cartbtn from '../Cartbtn';
import Cart from "../Cart"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme"
import products from "../products.js"

let productsWithAmountOne = [
    {
      name:"Firewire vågsurfingbräda Unibrow Timbertek (FCSII)",
      img:"./firewire.jpg",
      amount:1,
      price:4999,
      info: "",
      size:["6'0", "6'1","6'2","6'4","6'6"]
    }
  ]

  let productsWithAmountCero = [
      {
        name:"Firewire vågsurfingbräda Unibrow Timbertek (FCSII)",
        img:"./firewire.jpg",
        amount:0,
        price:4999,
        info: "",
        size:["6'0", "6'1","6'2","6'4","6'6"]
      }
    ]

describe("Testing Cartbtn",function(){
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test("Check if amount decrease if clicked on minus button when amount is 1", ()=>{
    let wrapperCartbtn = shallow(<Cart/>)

    wrapperCartbtn.setState({
      productsWithAmountOne
    })
    let wrappedButton = wrapperCartbtn.find('.minusBtn').at(0);

    wrappedButton.simulate("click");

    let wrapperArray = wrapperCartbtn.state("products")[0];

    expect(wrapperArray.amount).toBe(0)

  })

  test("Check if amount decrease if clicked on minus button when amount is 1", ()=>{
    let wrapperCartbtn = shallow(<Cart/>)

    wrapperCartbtn.setState({
      productsWithAmountCero
    })
    let wrappedButton = wrapperCartbtn.find('.minusBtn').at(0);
    wrappedButton.simulate("click");
    let wrapperArray = wrapperCartbtn.state("products")[0];

    expect(wrapperArray.amount).toBe(0)
  })

  test("Check if amount increase when clicked on the plusBtn", ()=>{
    let wrapperCartbtn = shallow(<Cart/>)

    wrapperCartbtn.setState({
      productsWithAmountCero
    })
    let wrappedButton = wrapperCartbtn.find('.plusBtn').at(0);
    wrappedButton.simulate("click");
    let wrapperArray = wrapperCartbtn.state("products")[0];

    expect(wrapperArray.amount).toBe(1)
  })




})
