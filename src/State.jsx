import React, { Component } from 'react'

export default class State extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1,
      title: "Basket"
    }
  }

  render() {
    // ======== Buttun bosilganda count qiymatini 1ga oshiradi va kamaytiradi
    const plus = () => {
      if (this.state.count < 10) this.setState({count: this.state.count + 1})
  
    }

    const minus = () => {
      if (this.state.count > 0) this.setState({count: this.state.count - 1})
    }

    // ======= Eventni ichidagi qiymatni ovolish =========
    const onChange = (event) => {
      this.setState({ title: event.target.value })
    }

    // ========= Select qiymatini olish =========
    const onSelect = (e) => {
      console.log(e.target.value);
    }

    // ======== Checkbox qiymatini olish =======
    const onCheck = (e) => {
      console.log(e.target.checked);
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>Count {this.state.count}</h1>
        <input onChange={onChange} type="text" placeholder='name'/>
        <select onChange={onSelect} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input onChange={onCheck} type="checkbox" name="" id="" />
        <br />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
