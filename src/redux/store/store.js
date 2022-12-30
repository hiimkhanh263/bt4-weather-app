import { configureStore } from "@reduxjs/toolkit";
import weatherSlide from "../slices/weatherSlide";

const store = configureStore({
  reducer: weatherSlide,
});

export default store;
