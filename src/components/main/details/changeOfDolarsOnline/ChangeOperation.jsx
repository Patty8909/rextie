import React from 'react';
import { Component } from 'react';

class ChangeOperation extends Component {
  constructor() {
    super();
    this.state = {
      dolares:''
    }
  }
  render() {
    return(
      <div className= "text-center line-height">
        <h2>¿Cuánto deseas cotizar?</h2>
        <input className="line-height" type="number" value={this.state.dolares} onChange={this.update.bind(this)}/>
        <div className="line-height">
        Recibiras: S/.
        <span>{Math.round(this.state.dolares * 3.2480) }</span>
        </div>
      </div>

     
    )}

    update(event) {
      this.setState({
        dolares: event.target.value
      })
    }
}



export default ChangeOperation;