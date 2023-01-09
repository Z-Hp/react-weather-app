import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function WeatherSearch() {
  const [search, setSearch] = useState(false);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.condition.icon_url);
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
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (search === false) {
    return <div className="WeatherSearch">{form}</div>;
  } else {
    if (temperature) {
      return (
        <div className="WeatherSearch">
          {form}
          <ul>
            <li>Temperature: {temperature}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
            <li>
              <img src={icon} alt="weather icon" />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="WeatherSearch">
          {form}
          <ThreeDots color="white" height={50} width={50} />
        </div>
      );
    }
  }
}
