import React from "react";

const WeatherData = ({ day, conditions, time, ...props }) => {
 console.log(props);
  return (
    <>
      <h2>{day}</h2>
      <ul>
        <li><span>Conditions: </span>{conditions}</li>
        <li><span>Time: </span>{time}</li>
      </ul>
    </>
  );
};

export default WeatherData;