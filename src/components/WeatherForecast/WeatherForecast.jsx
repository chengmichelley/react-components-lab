import "./WeatherForecast.css";
import WeatherData from "./WeatherData.jsx";
import WeatherIcon from "./WeatherIcon.jsx"

const WeatherForecast = ({ day, id, img, imgAlt, conditions, time }) => {
 return (
  <div className="weather">
   <WeatherIcon 
    img= { img }
    imgAlt= { imgAlt }
   />
   <WeatherData 
    day= { day }
    conditions= { conditions }
    time= { time }
   />
  </div>
 );
};

export default WeatherForecast;
