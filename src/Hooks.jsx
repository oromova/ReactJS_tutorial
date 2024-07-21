import {TimeIndicator, Title} from "./style.js"

const HooksComponent = () => {
return (
  <div>
    <h1>Styled Components</h1>
    <TimeIndicator bg="#FFFBE6" color="#FAAD14">18:00</TimeIndicator>
    <TimeIndicator bg="#FFF1F0" color="#F5222D">21:00</TimeIndicator>
    <TimeIndicator bg="#F9F0FF" color="#722ED1">21:00</TimeIndicator>
  
    <Title>Webbrain</Title>
    <Title size={22}>Webbrain</Title>
  </div>
);
  
}
export default HooksComponent;