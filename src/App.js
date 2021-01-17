import React, { Component } from 'react';
import Cart from './Cart';
import MainForm from './MainForm';
import FEATURES from './features';
import './App.css';

class App extends Component {
  // initialized state lives here to populate child components: MainForm and Cart
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // update function lives here because state is in this component
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>

          <form className="main__form">
            <h2>Customize your laptop</h2>
            <MainForm 
              optionsSelected={this.state.selected}
              features={FEATURES}
              onUpdateFeature={this.updateFeature}
            />
          </form>

          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart state={this.state} />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
