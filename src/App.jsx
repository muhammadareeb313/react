import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';


  const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState(null);
  
  

  useEffect(()=>{
    const  getLocation =  ()=>  {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=419679b5c559c6e730e0c5568386be2f`)
          .then(res=>{
            const get = res.data.current
            console.log(get);
            setWeather(get)
     console.log(weather);

    });   
        }, () => {
          setStatus('Unable to retrieve your location');
        });
      }
    }
     getLocation();



  
    return ()=>{
      console.log("unloaded");
    };
  },[]);
// var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// for( i = new Date().getDay();i<arrayOfWeekdays;i++){
//   console.log(arrayOfWeekdays[i]);
// }
// var dateObj = new Date()
// var weekdayNumber = dateObj.getDay()
// var weekdayName = arrayOfWeekdays[weekdayNumber]
// console.log(weekdayName);
// for(var i=weekdayNumber;i<weekdayName;i++){
// console.log(weekdayName[i]);

// }

// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//   case 1:
//     day = "Monday";
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// if("sunday"){
//   date.getDay()+3
// }if(date.getDay()+2){
//   var b="monday"} 

  return (
    <div className="App">
      <button >Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    <div className="upper">
      <h1>Karachi</h1>
      <h3>Cloudly</h3>
      <h1> {weather.temp}</h1>
      <h3>{`H:33  L:25`}</h3>
    </div>

    <div className="HoursPart">
      <ul>
      <li className="liFirs">{date.getHours()+1}</li>
      <li>{date.getHours()+2}</li>
      <li>{date.getHours()+3}</li>
      <li>{date.getHours()+4}</li>
      <li>{date.getHours()+5}</li>
      <li>{date.getHours()+6}</li></ul>
      <ul>
      <li className="liFirs">{date.getHours()+1}</li>
      <li>{date.getHours()+2}</li>
      <li>{date.getHours()+3}</li>
      <li>{date.getHours()+4}</li>
      <li>{date.getHours()+5}</li>
      <li>{date.getHours()+6}</li></ul>      <ul>
      <li className="liFirs">{date.getHours()+1}</li>
      <li>{date.getHours()+2}</li>
      <li>{date.getHours()+3}</li>
      <li>{date.getHours()+4}</li>
      <li>{date.getHours()+5}</li>
      <li>{date.getHours()+6}</li></ul>
    </div>

    <div className="DaysPart">
    <ul>
      <li className="a"></li>
      <li>{new Date().toLocaleString("default", { weekday: "short" })}</li>
      <li>{date.toLocaleString('en-us', { month : 'short' })}</li>
      <li>{  date.getDay()+3}</li>
      <li></li>
      <li>{date.getDay()+3}</li></ul>
    </div>
    </div>

  );
}

export default App;
