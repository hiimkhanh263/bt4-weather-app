import React from "react";
import "./DetailFooter.scss";
import moment from "moment";

function DetailFooter({ weather }) {
  return (
    <div className="footer-detail">
      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[0].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[0].condition.icon}
          alt=""
        />

        <p>
          <span className="type">
            {weather?.forecast.forecastday[0].hour[0].condition.text}
          </span>
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[0].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[1].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[1].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[1].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[1].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[2].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[2].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[2].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[2].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[3].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[3].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[3].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[3].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[4].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[4].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[4].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[4].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[5].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[5].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[5].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[5].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[6].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[6].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[6].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[6].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[7].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[7].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[7].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[7].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[8].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[8].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[8].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[8].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[9].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[9].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[9].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[9].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[10].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[10].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[10].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[10].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[11].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[11].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[11].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[11].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[12].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[12].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[12].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[12].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[13].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[13].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[13].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[13].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[14].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[14].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[14].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[14].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[15].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[15].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[15].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[15].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[16].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[16].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[16].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[16].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[17].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[17].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[17].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[17].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[18].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[18].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[18].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[18].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[19].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[19].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[19].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[19].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[20].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[20].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[20].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[20].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[21].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[21].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[21].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[21].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[22].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[22].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[22].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[22].temp_c)}°C
        </p>
      </div>

      <div className="detail-item">
        <p className="hour">
          {moment(weather?.forecast.forecastday[0].hour[23].time).format("HH")}
          :00
        </p>
        <img
          src={weather?.forecast.forecastday[0].hour[23].condition.icon}
          alt=""
        />
        <p className="type">
          {weather?.forecast.forecastday[0].hour[23].condition.text}
        </p>

        <p className="temp">
          {Math.round(weather?.forecast.forecastday[0].hour[23].temp_c)}°C
        </p>
      </div>
    </div>
  );
}

export default DetailFooter;
