import React,{useState} from 'react';
import "./App.css";
import Input from "./Components/Search";
import axios from "axios";
import Result from "./Components/Result";



const App = () => {
  const [input, setInput] = useState("") ;

  const[temp,settemp] = useState("");
  const [description, setdescription] =useState("");
  const [icon,seticon]=useState("");
  const [city, setcity] = useState("");
  
  const findweather=async()=> {
  const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d7fe7181a9a277132f406381c3c0980f`);
  const temp=await (res.data.main.temp-272.15 ).toFixed(0)+"℃";
  const description=await res.data.weather[0].description;
  const icon1=await res.data.weather[0].icon;
  const cloud=`https://openweathermap.org/img/wn/${icon1}.png`;
  const city=await res.data.name;
  setcity(city);
  settemp(temp);
  setdescription(description);
  seticon(cloud);
  setInput("");

  }
  
  return (
    <div className="app">
        <h1 className="title">Weather  App</h1>
     {temp ===""?
     (<Input input={input} setInput={setInput} findweather={findweather}/>):
      (<Result  temp={temp} description={description} icon={icon} city={city} settemp={settemp} />)}
    </div>
  )
}

export default App
