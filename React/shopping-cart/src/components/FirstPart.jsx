// Shortcut : imrc
import React, { Component } from "react";

// Shortcut : cc
class FirstPart extends Component {
  // 'state' object contain every property that this component needs
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // Javascript object for style
  // Properties must be in camal case format
  // Ex: fontSize: 10 => React will automatically convert this to fontSize: '10px'

  render() {
    // The parentheses after return is necessary
    // The empty tag <> below is the same as using <React.Fragment>
    // In doing so, you don't have to wrap the element around usng <div>
    return (
      <>
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </>
    );
    // For className, we normally use this for performance and easy to maintain
    // But in other time, you might want to apply a specific style to an element, then you use 'style' attribute
    // Another way to specify the style of an element is to just declare a javascript object inside the tag
    // Ex:
    // <h1 style={{fontSize = 100}}>Hello World!</h1>

    // Rendering List
    // Without the 'key' attribute, there will be a warning in console saying every child should have a unique key
    // This is because when virtual DOM changes, React needs to quickly figure what changes and where in the DOM should
    // it make changes to keep DOM in sync
  }

  handleIncrement() {
    console.log("Increment");
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // The below line of code is object destructuring
    // It facilitates the process of retreiving the value of count
    // So we don't have to use 'this.state.count', we can just use 'count'
    const { count } = this.state;
    // Instead of just returning "Zero" when count = 0, you can also return '<h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default FirstPart;
// You can export the component here or add "export default" to the front of the class signature
