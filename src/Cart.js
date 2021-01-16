import React, { Component, Fragment } from 'react';
import CartItem from './CartItem';
import Total from "./Total";

export class Cart extends Component {
  
  render() {

    const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];

      return (
        <CartItem 
          key={featureHash} 
          feature={feature} 
          selectedOption={selectedOption}
        >
        </CartItem>
        
      )
    });

    return (
      <Fragment>
        {summary}
        <Total state={this.props.state} />
      </Fragment>
    )
  }
}

export default Cart
