import React from "react";
import "./DetailHeader.scss";

function DetailHeader({ weather }) {
  return (
    <div className="header-detail">
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
      </div>

      <div className="header-detail-info">
        <div className="line">
          <p>
            Wind Speed: <span>{weather?.current.wind_kph} km/h</span>
          </p>
          <p>
            Humidity: <span>{weather?.current.humidity} km/h</span>
          </p>
          <p>
            Cloud: <span>{weather?.current.cloud}</span>
          </p>
        </div>
        <div className="line">
          <p>
            Sunrise:{" "}
            <span>{weather?.forecast.forecastday[0].astro.sunrise}</span>
          </p>
          <p>
            Sunset: <span>{weather?.forecast.forecastday[0].astro.sunset}</span>
          </p>
          <p>
            Moonrise:{" "}
            <span>{weather?.forecast.forecastday[0].astro.moonrise}</span>
          </p>
        </div>
        <div className="line">
          <p>
            Moonset:{" "}
            <span>{weather?.forecast.forecastday[0].astro.moonset}</span>
          </p>
          <p>
            Moon phase:{" "}
            <span>{weather?.forecast.forecastday[0].astro.moon_phase}</span>
          </p>
          <p>
            Illumination:{" "}
            <span>
              {weather?.forecast.forecastday[0].astro.moon_illumination}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailHeader;
