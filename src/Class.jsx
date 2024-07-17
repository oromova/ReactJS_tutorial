import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "Class", count: 0}
  }

  // setState

  render() {
    const plus = () => {
      if (this.state.count < 5) this.setState({ count: this.state.count + 1})
    };

    const minus = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1})
    };
    return (
      <div style = {this.props.style}>
        <h1>Hello from {this.state.title}</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
