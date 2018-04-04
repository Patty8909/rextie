import React from 'react';
import { Component } from 'react';

class ChangeOperation extends Component {
  constructor() {
    super();
    this.state = {
      soles:''
    }
  }
  render() {
    return(
      <div>
      <div>
    <div className= "justify-content-md-center">
      <div className="card border-info mb-3" style={{'maxWidth': '18rem'}}>
        <div className="card-body text-info">
          <h3>Compra: 3.2000
            <span></span>
            &nbsp;-&nbsp;Venta: 3.2480<span></span>
          </h3>
        </div>
      </div>
      </div>
      </div>
  
      <div className="">
    <div className="justify-content-md-center">
      <div className=" change">
        Tengo
        <input type="number" value={this.state.soles} onChange={this.update.bind(this)}/>
      </div>
      <div className="change">
        USD $
      </div>
    </div>
    <div className="justify-content-md-center">
      <div className=" change">
        Quiero
        <p>{Math.round(this.state.soles / 3.2480) }</p>
      </div>
      <div className="change">
        PEN S/.
      </div>
     
    </div>
  </div>
      
    </div>
    )}

    update(event) {
      this.setState({
        soles: event.target.value
      })
    }
}



export default ChangeOperation;