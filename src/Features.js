import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use in both URLs and html attributes
import slugify from 'slugify';
import Option from './Option';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export class Features extends Component {

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.props.optionsSelected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  
  render() {

    
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Option key={itemHash} className="feature__item">
            <Option />
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.optionsSelected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </Option>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {/* {options} */}
        </fieldset>
      );
    });

    return (
      <div>
        {/* {this.props.features} */}
        {features}
      </div>
    )
  }
}

export default Features
