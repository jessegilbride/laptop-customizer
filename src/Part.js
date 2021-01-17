import React, { Component } from 'react'
import { USCurrencyFormat } from "./currencyFormatter";
/* 
PROPS PASSED IN: 
item={item}
itemHash={itemHash}
feature={this.props.feature}
optionsSelected={this.props.optionsSelected}
*/

export class Part extends Component {
  render() {
    // this is a single option
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          // name={slugify(this.props.feature)}
          name={this.props.feature}
          checked={this.props.item.name === this.props.optionsSelected[this.props.feature].name}
          onChange={e => this.props.onUpdateFeature(this.props.feature, this.props.item)}
        />

        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    )
  }
}

export default Part
