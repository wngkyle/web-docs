import React, { Component } from 'react';
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    
    // We use object destructuring here too to simplify the code 
    const {onReset, counters, onDelete, onIncrement} = this.props;   

    return (
      <>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // The 'key' attribute here is used by React internally we cannot access it
            onDelete={onDelete}
            // value={counter.value}
            // id={counter.id}
            // Instead of passing 'value' and 'id' attributes, we can just pass in counter object
            // This is encapsulation
            // Something like this counter = {counter}
            counter={counter}
            onIncrement={onIncrement}
          >
            <h4>Item #{counter.id}</h4>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
