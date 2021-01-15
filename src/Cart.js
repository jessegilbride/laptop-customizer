import React, { Component, Fragment } from 'react';
import CartItem from './CartItem';

/* const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}); */

export class Cart extends Component {
  
  render() {

    const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];

      return (
        <CartItem featureHash={featureHash} feature={feature} selectedOption={selectedOption}>
          {/*
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div> 
      */}
        </CartItem>
        
      )
    });

    return (
      <Fragment>
        {summary}
      </Fragment>
    )
  }
}

export default Cart
