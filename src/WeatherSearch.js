import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

// ////////////////////////////////////////////////PART 1 : Define Main Function////////////////////////////////////////////////////
export default function WeatherSearch(props) {
  // PART A : Define States////////////////////////////////////////////////////
  const [weatherData, setWeatherData] = useState({ searching: false });
  const [city, setCity] = useState(props.defaultCity);

  // PART B : Define Other Functions////////////////////////////////////////////////////
  function showTemperature(response) {
    setWeatherData({
      searching: true,
      // cityName: response.data.city,
      // temperature: Math.round(response.data.temperature.current),
      // description: response.data.condition.description,
      // humidity: response.data.temperature.humidity,
      // wind: Math.round(response.data.wind.speed),
      // iconUrl: response.data.condition.icon_url,
      // date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.main.temp),
      cityName: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      // iconUrl: `assets/${response.data.weather[0].icon}.svg`,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    if (city === "") {
      alert("Plase inter a city");
    } else {
      event.preventDefault();
      search();
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    // let apiKey = "2fcafa1aefod01457ce321at38ddee0b";
    // let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    const apiKey = "3ca350b553445b933c97a8b98083fd15";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }

  // Part C : Define Form //////////////////////////
  let form = (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            autoComplete="off"
            className="form-control shadow-sm"
            onChange={changeCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary shadow-sm w-100"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success w-100">Current</button>
        </div>
      </div>
    </form>
  );

  // ////////////////////////////////////////////////////PART 2 : Return //////////////////////////////////////////////////////////

  if (weatherData.searching === true) {
    return (
      <div className="WeatherSearch">
        {form}
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="WeatherSearch">
        {form}
        <ThreeDots color="black" height={50} width={50} />
      </div>
    );
  }
}
