import React, { Component } from 'react';
import "./css/App.css";
import './css/cartbtn.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Cartbtn extends Component {

  constructor(){
    super();
    this.state={
      cartbtn : true,
      line:false,
      ruta:false,
      rutaUnder:false
    }
  }



  leaveCartBtnComponent = ()=>{

    this.setState({
      cartbtn:false,
      line:false,
      ruta:false
    })

    this.props.cartBtnClicked()
  }


  render() {
    return (

        <React.Fragment>

            <CSSTransition
              in={this.state.ruta}
              timeout={200}
              classNames="ruta"
              onEntered={() => {
                  this.setState({
                    rutaUnder:true
                  })
              }}
            >
              <div className="ruta">

              </div>
            </CSSTransition>
          <div className="startBtn">



              <CSSTransition
                in={this.state.cartbtn}
                appear={true}
                timeout={900}
                classNames="fade"
                onEntered={() => {
                    this.setState({
                      line:true
                    })
                }}
              >

                <span className="cartbtn" onClick={this.leaveCartBtnComponent} >
                View cart
                </span>
              </CSSTransition>

              <CSSTransition
                in={this.state.line}
                timeout={400}
                classNames="line"
                onEntered={() => {
                    this.setState({
                      ruta:true
                    })
                }}
              >
                <div id="line">
                </div>
              </CSSTransition>


          </div>
          <CSSTransition
            in={this.state.ruta}
            timeout={200}
            classNames="rutaUnder"
          >
            <div className="rutaUnder">

            </div>
          </CSSTransition>
        </React.Fragment>
    );
  }
}

export default Cartbtn;
