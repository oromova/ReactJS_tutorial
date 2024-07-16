import React from "react";

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
      this.setState({age: 30})
    }
    return (
        <div>
          <h1>{this.state.title}</h1>
          <button onClick={onChange}>change</button>
          {/* <button onClick={(e) => {onChange(e)}}>Change</button> */}
        </div>
    ) 
   
  }
}

export default SayHello;