import React from "react";
import "./Chart.scss";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function LineChart({ weather }) {
  const options = {
    chart: {
      maxHeight: 130,
    },
    title: {
      text: "Temperature",
    },

    xAxis: {
      title: {
        text: "Time",
      },

      tickInterval: 1,
      accessibility: {
        rangeDescription: "Range: 0 to 24",
      },
    },

    yAxis: {
      title: {
        text: "Temperature",
      },
      height: 90,
      tickInterval: 5,
      accessibility: {
        rangeDescription: "Range: 10 to 100",
      },
    },

    tooltip: {
      headerFormat: "<b>{series.name}: </b>",
      pointFormat: "{point.y}°C",
    },

    series: [
      {
        name: "Temperature",
        data: [
          Math.round(weather?.forecast.forecastday[0].hour[0].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[2].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[1].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[3].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[4].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[5].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[6].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[7].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[8].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[9].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[10].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[11].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[12].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[13].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[14].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[15].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[16].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[17].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[18].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[19].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[20].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[21].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[22].temp_c),
          Math.round(weather?.forecast.forecastday[0].hour[23].temp_c),
        ],
        pointStart: 1,
      },
    ],
  };

  return (
    <div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
