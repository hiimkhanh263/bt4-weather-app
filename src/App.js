import "./App.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import SearchCity from "./components/SearchCity";
import InfoToday from "./components/InfoToday";
import LineChart from "./components/Chart";
import RowDayItem from "./components/RowDayItem";
import DetailDay from "./components/DetailDay";

function App() {
  const state = useSelector((state) => state);

  const { weather } = state;

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  const handleBackBtn = () => {
    setShow(true);
  };

  return (
    <div className="body">
      {show && (
        <div className="container">
          <div className="left">
            <SearchCity />

            <InfoToday weather={weather} />
          </div>

          <div className="right">
            <LineChart weather={weather} />

            <RowDayItem weather={weather} onClick={handleClick} />
          </div>
        </div>
      )}

      {!show && <DetailDay weather={weather} onClick={handleBackBtn} />}
    </div>
  );
}

export default App;
