import React from "react";

export default function Details(props) {
  return (
    <div className="Details">
      <ul>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind: {props.wind}km/h</li>
      </ul>
    </div>
  );
}
