import React, { Component } from 'react'
import { USCurrencyFormat } from "./currencyFormatter";
/* 
IMPORTED PROPS: 
{...props}
item={item}
itemHash={itemHash}
*/
export class Part extends Component {
  render() {
    // this is a single option
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          // name={slugify(this.props.feature)}
          name={this.props.feature}
          checked={item.name === this.props.optionsSelected[this.props.feature].name}
          onChange={e => this.props.onUpdateFeature(this.props.feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    )
  }
}

export default Part
