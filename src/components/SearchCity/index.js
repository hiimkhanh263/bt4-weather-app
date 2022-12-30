import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherAction } from "../../redux/slices/weatherSlide";
import "./SearchCity.scss";

function SearchCity() {
  const [city, setCity] = useState("Hanoi");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction(city));
  }, []);

  const handleAutoCompleteSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      dispatch(fetchWeatherAction(city));
    }
  };

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="location">
        <p>Your city</p>
        <input
          value={city}
          onKeyDown={handleAutoCompleteSearch}
          onChange={handleOnChange}
          className="search-city"
          placeholder="Search City"
        ></input>
      </div>
    </div>
  );
}

export default SearchCity;
