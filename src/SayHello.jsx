import React from "react";
import Frame from "./Frame";

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "State title",
      age: 123,
    };
  }


  render() {
    const onChange = () => {
      this.setState({title: "Webbrain"})
    }
    return (
      <Frame>
        <div>
          <h1>{this.state.title}</h1>
          <button onClick={onChange}>change</button>
          {/* <button onClick={(e) => {onChange(e)}}>Change</button> */}
        </div>
      </Frame>
    ) 
   
  }
}

export default SayHello;