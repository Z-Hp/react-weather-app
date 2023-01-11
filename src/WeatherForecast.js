import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [searching, setSearching] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setSearching(true);
    setForecastData(response.data.daily);
  }
  function searchForForecast() {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiKey = "3ca350b553445b933c97a8b98083fd15";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (searching === true) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    searchForForecast();
    return <ThreeDots color="black" height={50} width={50} />;
  }
}
