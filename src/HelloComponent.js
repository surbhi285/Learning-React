import logo from './logo.svg';
import './App.css';

function HelloComponent(props){
  
  const {name, standard} = props
  
  return (
    
    <div>Hello guyss my name is {name} and i studied in standard {standard}</div>
    
  );
}

export default HelloComponent;
