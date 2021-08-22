// //39984a5b5194233335e567927c183d00
// api.openweathermap.org/data/2.5/weather?q=delhi&appid=39984a5b5194233335e567927c183d00
//pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}



import React,{ useState, useEffect} from "react";
import "./style.css";
import WeatherData from "./WeatherData";
const Temp = () => {
    const [searchValue, setSearchValue] = useState("deoria");
    const [tempInfo, setTempInfo] = useState({});

    // const getWeatherForecast= async () => {
    //   try {
    //     let url = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=deoria&appid=67bb5a7ee9338a79307ff0dec048f01d`
    //     let  result =await fetch(url);
    //     let data = await result.json();
    //     console.log(result);

    //   }catch (error) {
    //     console.log(error);
    //   }
    // }

const getWeatherInfo = async () => {
       try {
           let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d47e68282317548f4eaf68d2bd69ded6`

           let res = await fetch(url);
           let data = await res.json();
     
           const { temp, humidity, pressure } = data.main;
           const { main: weathermood } = data.weather[0];
           const { name } = data;
           const { speed } = data.wind;
           const { country, sunset } = data.sys;
     
           const myNewWeatherInfo = {
             temp,
             humidity,
             pressure,
             weathermood,
             name,
             speed,
             country,
             sunset,
           };
     
           setTempInfo(myNewWeatherInfo);
         } catch (error) {
           console.log(error);
         }
       };
     
       useEffect(() => {
         getWeatherInfo();
       },[]);
     
       return (
         <div className="main">
           <div className="wrap">
             <div className="search">
               <input
                 type="search"
                 placeholder="search..."
                 autoFocus
                 id="search"
                 className="searchTerm"
                 value={searchValue}
                 onChange={(e) => setSearchValue(e.target.value)}
               />
     
               <button
                 className="searchButton"
                 type="button"
                 onClick={getWeatherInfo}>
                 Search
               </button>
             </div>
           </div>
     
           {/* our temp card  */}
           <WeatherData {...tempInfo} />
         
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
          
         </div>
       );
     };
     
     export default Temp;
