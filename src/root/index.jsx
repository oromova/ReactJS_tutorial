import { useState } from "react";
import students from "../mock/student";

export const Root = () => {
  const [data, setData] = useState(students)

  const searchByName = ({ target: { value }}) => {
    let res = students.filter((student) => student.name.includes(value))
    setData(res)
  }

  const searchByTel = ({ target: {value }}) => {
    let res = students.filter((student) => student.phone.split(' ').join('').includes(value))
    setData(res)
  }
  return (
    <div>
      <h1>Student List</h1>
      <input onChange={searchByName} type="text" placeholder="name" />
      <input onChange={searchByTel} type="text" placeholder="telefon"/>
      <table border={1} style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Telefon</th>
          <th>Age</th>
          <th>Department</th>
        </tr>
        </thead>
        <tbody>
          {
            data.map((std) =>{
              return(
               <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.phone}</td>
                <td>{std.age}</td>
                <td>{std.department}</td>
              </tr>
            ); 
            })
          }
        </tbody>
      </table>

      {/* <h1>Student List</h1>
      {data.map(([title, list]) => {
        return <div key={title}>{title}
        {
          list.map((lst)=>{
            return(

            )
          })
        }
        </div>
      })} */}
    </div>
  );
};

export default Root;