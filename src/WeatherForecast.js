import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiKey = "3ca350b553445b933c97a8b98083fd15";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={46} />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={46} />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={46} />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={46} />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={46} />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
