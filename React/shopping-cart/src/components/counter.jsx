import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call
      // Perhaps get new data from the server
    }
  }

  // This method is called just before a component is removed from the DOM
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    // console.log("props", this.props);
    // Props is a plain javascript object that includes all the attributes that we set in 'counter' component
    // HOWEVER, 'key' attribute will not be printed because 'key' is a special attribute use for uniquely identifying elements
    // Any children wrapped around by the tags/component will also be shown when printing out 'this.props'

    return (
      <>
        {/* <h4>Counter #{this.props.id}</h4>  =>  this works the same as below {this.props.children}, method 1 is preferred */}
        {this.props.children} 
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br></br>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </>
    );
  }
  // In Javascript, you can apply non-boolean value like string in logical operator
  // If the first statement is true, the string or the non-boolean value that followed will be returned
  // If the first statement is false, then false will be returned

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // if (this.props.counter.value === 0) return "Zero";
    // return this.props.counter.value;
    const {value} = this.props.counter
    return value === 0 ? "Zero" : value;
  }

  ////////////////////////////////////// BELOW ARE NOT USED AND CAN BE DELETED, NOTES ONLY //////////////////////////////////////////////

  state = {
    value: this.props.counter.value,
  };
  // Instead of setting 'count' to 0, we set it to this.props.value so the value is updated accordingly

  // Difference between 'Props' and 'State'
  // - Props: data we give to a component, and props are 'READ-ONLY' you cannot change value of any props directly
  // - State: data that is local or private to that component, other component cannot access state, it is completely internal to that component
  // Sometimes a component may not need a state, it just need a prop
  // Since props are read-only, the only way to change the value of a component's properties is to modify them in state

  constructor(props) {
    super(props); // this calls the constructor of the parent class (Component)
    // console.log("Constructor", this);
    // Using the constructor now we have access to our object

    this.handleIncrement = this.handleIncrement.bind(this);
    // Using the bind() method, 'this' in handleIncrement() will always be referencing to the current object
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
    // You pass an object into setState
    // console.log("Increment Clicked", this.state.value);
  }
  // Whenever you want to pass in an argument to an event handler just pass in an arrow function in render()
  // Like what is done for onClick above
  handleIncrement2 = (product) => {
    this.setState({ value: this.state.value + 1 });
    // You pass an object into setState
    // console.log("Increment Clicked", this.state.value);
    // console.log("Product", product);
  };
  // You cannot use keyword 'this' in event handler
  // Event handlers don't have access to 'this'
  // This is because 'this' can refer to different object
  // obj.method() : refer to the object calling
  // method() : refer to the window object
  // HOWEVER!!!
  // If strictMode is enabled, 'this' will return undefined
  // Solution:
  // 1. Use the contructor
  // 2. Convert the function into arrow function because arrow function inherit 'this'

  // Event handler questions (handleIncrement):
  // 1. You don't need parentheses when using it
  //    This is because you pass it as a function reference, not a function

}

export default Counter;

// When we clicked the button, the program calls the handleIncrement() function
// Letting React know something has changed and it will schedule a call for render() function
// We don't when render() function will be called exactly but it will happen
// The render() function will then return a yield React element ranging from <> to </>
