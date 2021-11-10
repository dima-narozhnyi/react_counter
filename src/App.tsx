import React from 'react';
import './App.scss';

interface State {
  count: number;
}

export class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="counter">
          <h1 className="counter__title">{`Count: ${count}`}</h1>
          <div className="counter__button-wrapper">
            <button className="counter__button" type="button" onClick={this.addOne}>Add 1</button>
            <button className="counter__button" type="button" onClick={this.add100}>Add 100</button>
            <button className="counter__button" type="button" onClick={this.increase}>Increase</button>
          </div>
          <button
            className="counter__button counter__button--reset"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
