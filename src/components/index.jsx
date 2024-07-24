// import { DeleteButton, PrimeryButton, Button } from './style'
import { students } from '../mock/student'
import { useState } from 'react';


export const Root = () => {
 const [stds, setStudents] = useState(students);

  const onDelete = (id) => {
    console.log(id, 'iiiid');
    let res = stds.filter(([val])=> val !== id) 
    setStudents(res);
  };
    return (
      <div>
      <h1>Student list</h1>
      {
        stds.map(([title]) => {
          return (
          <div key={title}>
            <h3>
              {title} - <button onClick={() => onDelete(title)}>Delete</button>
            </h3>
          </div>
          );
        })
      }
    </div>
    );
  };
  


export default Root