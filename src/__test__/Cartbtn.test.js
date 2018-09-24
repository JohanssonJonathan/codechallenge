import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App"
import Cartbtn from '../Cartbtn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme"


describe("Testing Cartbtn",function(){
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cartbtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


    test("Clicked cartbtn in Cartbtn component", ()=>{
      let wrapperApp = shallow(<App />);
      let wrapperCartbtn = shallow(<Cartbtn/>)

      let wrappedButton = wrapperCartbtn.find('.cartbtn').at(0);

      wrappedButton.simulate("click");
      expect(wrapperCartbtn.state()).toEqual({
        line:false,
        ruta:false,
        rutaUnder:false,
      })
    })

    
})
