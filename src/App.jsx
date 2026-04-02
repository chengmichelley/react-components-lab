// src/App.jsx
import WeatherData from "./components/WeatherForecast/WeatherData.jsx"
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx"
import WeatherIcon from "./components/WeatherForecast/WeatherIcon.jsx"

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      id: 0,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      id: 1,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      id: 2,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      id: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      id: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      <section>
          {weatherForecasts.map(( forecast, index ) => (
           <WeatherForecast
            key={ forecast.id }
            day= { forecast.day }
            img= { forecast.img }
            imgAlt= { forecast.imgAlt}
            conditions= { forecast.conditions }
            time= { forecast.time }
           />
         ))}
      </section>
     </>
    );
   };

export default App;
