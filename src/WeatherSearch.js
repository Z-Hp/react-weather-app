import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function WeatherSearch() {
  const [search, setSearch] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  // const [temperature, setTemperature] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [humidity, setHumidity] = useState(null);
  // const [wind, setWind] = useState(null);
  // const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setSearch(true);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: response.data.condition.icon_url,
    });
    // setTemperature(Math.round(response.data.temperature.current));
    // setDescription(response.data.condition.description);
    // setHumidity(response.data.temperature.humidity);
    // setWind(Math.round(response.data.wind.speed));
    // setIcon(response.data.condition.icon_url);
  }

  function handleSubmit(event) {
    if (city === "") {
      alert("Plase inter a city");
    } else {
      event.preventDefault();
      setSearch(true);
      let apiKey = "2fcafa1aefod01457ce321at38ddee0b";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(showTemperature);
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
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
        <div class="col-3">
          <button className="btn btn-success w-100">Current</button>
        </div>
      </div>
    </form>
  );

  if (search === false) {
    return <div className="WeatherSearch">{form}</div>;
  } else {
    if (weatherData.temperature) {
      return (
        <div className="WeatherSearch">
          {form}
          <div className="Overview">
            <h1>{city}</h1>
            <ul>
              <li>Thursday 20:57</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div className="WeatherTemperature clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units"> °C </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div className="Details">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="WeatherSearch">
          {form}
          <ThreeDots color="black" height={50} width={50} />
        </div>
      );
    }
  }
}
