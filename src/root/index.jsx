import Table from '../components/Table'
import Navbar from "../components/Navbar";
import students from '../mock/student';
import { useReducer, useState } from 'react';


export const Root = () => {
 
const [state, setState] = useState(Number(localStorage.getItem('count') || 1))

const onPlus = () => {
  setState(state+1)
  localStorage.setItem('count', state+1)
}
const onMinus = () => {
  setState(state+1)
  localStorage.setItem('count', state-1)
}
  return (
   <div>
    <h1>State: {state}</h1>
    <button onClick={onPlus}>+</button>
    <button onClick={onMinus}>-</button>
    <button onClick={()=>localStorage.removeItem("count")}>remove</button>
    <button onClick={()=>localStorage.clear()}>clear</button>
    </div>
  );
};

export default Root;