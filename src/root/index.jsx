import Table from '../components/Table'
import Navbar from "../components/Navbar";
import students from '../mock/student';
import { useReducer, useState } from 'react';


export const Root = () => {
  // const [data, setData] = useState(students)
  const [cnt, dispatch] = useReducer((state, action)=>{
    console.log(state, action);
    switch (action.type){
      case 'plus':
        return state + 1;
      case "minus":
        return state - 1;
        case "amount":
        return state + action.payload;
      default: 
      return state
    }       // return statega teng
  }, 1)



  // const onDelete = (id) => {
  //   let res = data.filter((student) =>
  //   student.id !== id)
  //   setData(res)
  // }

  return (
     <div>

      <h1>CNT: {cnt}</h1>
      <button onClick={() => dispatch({type: 'plus'})}>plus</button>
      <button onClick={() => dispatch({type: 'minus'})}>minus</button>
      <button onClick={() => dispatch({type: "amount", payload: cnt})}>{cnt}</button>
    {/*  <Navbar length={data.length}></Navbar>
      <Table data={data} onDelete={onDelete}/> */}
     </div>
  );
};

export default Root;