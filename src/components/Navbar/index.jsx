import React from 'react'
import { MenuItem, Wrapper } from './style';

export const Navbar = (props) => {
  return (
    <Wrapper>
      <MenuItem>Home</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Reset</MenuItem>
      <MenuItem>Info {props.length}</MenuItem>
    </Wrapper>
  )
}

export default Navbar