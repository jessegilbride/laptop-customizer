import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use in both URLs and html attributes
// import slugify from 'slugify';
import Option from './Option';

// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

export class Features extends Component {

  /* updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.props.optionsSelected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }; */
  
  render() {

    // Object.keys returns just the names of features: ["Processor", "Operating System", "Video Card", "Display"]
    // Then map over that array, referring to each one as "feature"
    const features = Object.keys(this.props.features).map((feature, idx) => {
      // "featureHash" is used as the key for each block in the features list
      const featureHash = feature + '-' + idx;

      return (
        <Option 
          features={this.props.features} 
          feature={feature} 
          idx={idx} 
          featureHash={featureHash} 
          optionsSelected={this.props.optionsSelected} 
          onUpdateFeature={this.props.onUpdateFeature}
        />
      )

      /* // Mapping over each feature, each one is called "item" -- there are 2 items per feature
      // "options" therefore contains the 2 options (for each feature)
      const options = this.props.features[feature].map(item => {
        // "itemHash" is used as the key for each of the 2 options
        const itemHash = slugify(JSON.stringify(item));

        return (
          // this is a single option
          <div key={itemHash} className="feature__item">
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
          </div>
        );

      });

      return (
        // this is the block that represents the whole option component
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>

        // <Option featureID={featureHash} featureName={feature} optionsAvailable={options} />
      ); */

    }); // END of map() that creates "features"

    // The final component return, inside render()
    return (
      <div>
        {/* {this.props.features} */}
        {features}
      </div>
    )
  }
}

export default Features
