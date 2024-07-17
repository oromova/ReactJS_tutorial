// const HooksComponent = () => <h1>Hello from Class Hooks</h1>
import { useEffect, useState } from "react";

const HooksComponent = (props) => {
  const [title, setTitle] = useState('Hooks')
  const [count, setCount] = useState(0)
  
  const plus = () => {
    if (count < 5) setCount(count + 1);
  };
  
  const minus = () => {
    if (count > 0) setCount(count - 1)
  };

  // case 1 - qachonki setState ishlasa useEffect ishlidi
  useEffect(() => {
    //console.log("case 1");
  })

  // case 2 - butun boshli proyectda faqat bir marta ishlidi. 
  useEffect(() => {
    console.log("case 2");
  }, [])

  // case 3 - 1ta dependences yozishimiz mumkin.
  useEffect(() => {
    console.log("case 3");
  }, [count]);

  // case 4 - 2-parametrdagi hamma qiymatlari ishlagandagi ishlaydi
  useEffect(() => {
    console.log("case 4");
  }, [title, count]);
  
  const onChange = e => {
    setTitle(e.target.value)
  };

  return( 
  <div style={props.style}>
    <h1>Hello from {title}</h1>
    <h1>Count {count} </h1>
    <h1>Title {title} </h1>
    <input type="text"  value={title} onChange={onChange}/>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
  </div> 
  );
};

export default HooksComponent;