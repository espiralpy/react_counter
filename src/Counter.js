import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
        super(props);

        this.state = {
            counterAdd: 0,
            counterSubstract: 0
        }
    }

  add = () => {
    this.setState({
      counterAdd: this.state.counterAdd + 1
    });
  }

  substract = () => {
    this.setState({
      counterSubstract: this.state.counterSubstract - 1
    });
  }

  increaseAll = () => {
    this.setState({
      counterAdd: this.state.counterAdd + 1
    });
    this.setState({
      counterSubstract: this.state.counterSubstract + 1
    });
  }

  decreaseAll = () => {
    this.setState({
      counterAdd: this.state.counterAdd - 1
    });
    this.setState({
      counterSubstract: this.state.counterSubstract - 1
    });
  }

  render() {
    return (
      <div>
        HOMEWORK 2 COUNTER
        <div>    
          <div>
          <span><input type="button" value="+" onClick={ this.add } />counter: { this.state.counterAdd }</span>
          <br/>
          <span><input type="button" value="-" onClick={ this.substract } />counter: { this.state.counterSubstract }</span>
          <br/>
          <input type="button" value="Increase all" onClick={ this.increaseAll } />
          <br/>
          <input type="button" value="Decrease all" onClick={ this.decreaseAll } />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
