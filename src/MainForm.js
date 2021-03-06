import React, { Component } from 'react';
import Option from './Option';
/* 
IMPORTED PROPS: 
optionsSelected={this.state.selected}
features={FEATURES}
onUpdateFeature={this.updateFeature}
*/

export class MainForm extends Component {
  
  render() {

    // Object.keys returns just the names of features: ["Processor", "Operating System", "Video Card", "Display"]
    // Then map over that array, referring to each one as "feature"
    const features = Object.keys(this.props.features).map((feature, idx) => {
      // "featureHash" is used as the key for each block in the features list, passed into <Option> component
      const featureHash = feature + '-' + idx;

      return (
        <Option 
          features={this.props.features} 
          feature={feature} 
          idx={idx} 
          key={featureHash}
          featureHash={featureHash} 
          optionsSelected={this.props.optionsSelected} 
          onUpdateFeature={this.props.onUpdateFeature}
        />
      )

    });

    return (
      <div>
        {features}
      </div>
    )
  }
}

export default MainForm
