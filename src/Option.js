import React, { Component } from 'react';
import slugify from 'slugify';
import Part from './Part';
/* 
PROPS PASSED IN: 
features={this.props.features}
feature={feature}
idx={idx}
key={featureHash}
featureHash={featureHash}
optionsSelected={this.props.optionsSelected}
onUpdateFeature={this.props.onUpdateFeature}
 */

export class Option extends Component {

  render() {

    // Mapping over each feature, each one is called "item" -- there are 2 items per feature
    // "options" therefore contains the 2 options (for each feature)
    const options = this.props.features[this.props.feature].map(item => {
      // "itemHash" is used as the key for each of the 2 options
      const itemHash = slugify(JSON.stringify(item.name));

      return (
        // this is a single option
        <Part 
          key={itemHash}
          item={item}
          itemHash={itemHash}
          feature={this.props.feature}
          optionsSelected={this.props.optionsSelected}
          onUpdateFeature={this.props.onUpdateFeature}
        >
        </Part>
      );
    });
    
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
