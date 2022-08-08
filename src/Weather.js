import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(" ");

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description.toUpperCase());
    setWind(response.data.wind.speed);
    setIcon(
      "http://openweathermap.org/img/wn/" +
        response.data.weather[0].icon +
        "@2x.png"
    );
  }
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    props.city +
    "&appid=032e8a8762076f19419119384173a976&units=metric";
  axios.get(url).then(handleResponse);

  if (props.city) {
    return (
      <div>
        <h2>Current weather in {props.city.toUpperCase()} is: </h2>
        <ul>
          <li> Temp: {Math.round(temperature)}°C</li>
          <li> {description} </li>
          <li> Humidity : {humidity}%</li>
          <li> Wind: {Math.round(wind)} kph</li>
          <li>
            <img src={icon} alt="Weather emoji" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <h2> </h2>;
  }
}
