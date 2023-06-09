import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </>
    );
  }
}

export default Counters;
