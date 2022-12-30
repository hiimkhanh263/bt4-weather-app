import React from "react";
import "./InfoToday.scss";

function InfoToday({ weather }) {
  return (
    <div>
      <div className="info-today">
        <p className="timer">{weather?.location.localtime}</p>
        <div className="today-temp">
          <img src={weather?.current.condition.icon} alt="" />
          <span>
            <p>
              {Math.round(weather?.current.temp_c)} <sup>°C</sup>
            </p>
          </span>
        </div>
        <h1>{weather?.current.condition.text}</h1>
        <div className="info-footer">
          <div className="humidity">
            <p className="footer-text">Humidity</p>
            <p className="footer-num">{weather?.current.humidity}%</p>
          </div>
          <div className="wind-speed">
            <p className="footer-text">Wind Speed</p>
            <p className="footer-num">{weather?.current.wind_kph} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoToday;
