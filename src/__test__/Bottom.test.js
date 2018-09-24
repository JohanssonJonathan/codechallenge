import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App"
import Bottom from '../Bottom.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme"


describe("Testing Cartbtn",function(){
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bottom />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test("Clicked continue shopping button in Bottom component", ()=>{
    let wrapperApp = shallow(<App />);
    let wrapperCartbtn = shallow(<Bottom/>)

    let wrappedButton = wrapperCartbtn.find('.bottom').at(0);

    wrappedButton.simulate("click");
    expect(wrapperApp.state()).toEqual({
      showCart:false,
      cartbtn:true
    })
  })

})
