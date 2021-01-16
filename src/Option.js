import React, { Component } from 'react';
import slugify from 'slugify';
import { USCurrencyFormat } from "./currencyFormatter";
// PROPS PASSED IN: features, feature, idx, featureHash, optionsSelected

/* const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}); */

export class Option extends Component {

  render() {

    // Mapping over each feature, each one is called "item" -- there are 2 items per feature
    // "options" therefore contains the 2 options (for each feature)
    const options = this.props.features[this.props.feature].map(item => {
      // "itemHash" is used as the key for each of the 2 options
      const itemHash = slugify(JSON.stringify(item.name));

      /* DEBUG */
      // console.log("%c__item...", 'color:lightblue')
      // console.log(item)
      // console.log("%c__itemHash...", 'color:red')
      // console.log(itemHash)

      return (
        // this is a single option
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
      );

    });

    /* DEBUG */
    // console.log("%c__featureHash...", 'color:yellow')
    // console.log(this.props.featureHash)
    
    
    
    return (
      // this is the block that represents the whole option component
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );

  }
}

export default Option
