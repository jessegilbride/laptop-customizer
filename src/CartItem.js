import React, { Component } from 'react';
import { USCurrencyFormat } from "./currencyFormatter";

/* const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}); */

export class CartItem extends Component {
  render() {
    return (
      <div className="summary__option">
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.props.selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </div>
    )
  }
}

export default CartItem
