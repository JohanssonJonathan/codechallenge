import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import Cartbtn from "../Cartbtn.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme"

describe("Testing App component", function(){
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  test('App state in the beginning', () => {
      let wrapper = shallow(<App />);
        expect( wrapper.state() ).toEqual( {
          showCart: false,
          cartbtn:true
        } );
  })

  test("Clicked cartbtn in Cartbtn component", ()=>{
    let wrapperApp = shallow(<App />);
    let wrapperCartbtn = shallow(<Cartbtn/>)

    let wrappedButton = wrapperCartbtn.find('.cartbtn').at(0);

    wrappedButton.simulate("click");
    expect(wrapperApp.state()).toEqual({
      showCart:false,
      cartbtn:true
    })
  })


})
