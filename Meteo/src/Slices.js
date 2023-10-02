import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  city_0: {
    name: "Sydney",
    lat: -33.8679,
    lon: 151.2093,
    data: {},
  },
  mainCity: {
    name: "Sydney",
    lat: -33.8679,
    lon: 151.2093,
    data: {},
  },
  city_1: {
    name: "Milan",
    lat: 45.4643,
    lon: 9.1895,
    data: {},
  },
  city_2: {
    name: "Napoli",
    lat: 40.8522,
    lon: 14.2681,
    data: {},
  },
  mainCityDetails: {},
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setMainCity: (state, action) => {
      const indexMainCity = [state.city_0, state.city_1, state.city_2]
        .map((city) => city.name)
        .indexOf(action.payload.name);
      state["city_" + indexMainCity] = action.payload;
      state.mainCity = action.payload;
    },
    setCityData: (state, action) => {
      const cities = [state.city_0, state.city_1, state.city_2];
      const cityAlreadyPushed = cities.find(
        (city) => city.name === action.payload.name
      );
      if (action.payload.name && !cityAlreadyPushed) {
        state.city_0 = action.payload;
        state.city_1 = cities[0];
        state.city_2 = cities[1];
      } else if (cityAlreadyPushed) {
        state.mainCity = action.payload;
      }
    },
    setMainCityDetails: (state, action) => {
      state.mainCityDetails = action.payload;
    },
    updateCityInfo: (state, action) => {
      const cityPosition = action.payload.position;
      state[cityPosition].data = action.payload.info;
    },
  },
});

export const {
  setMainCity,
  setCityData,
  setMainCityDetails,
  updateCityInfo,
} = citySlice.actions;

export const selectCity = (state) => state.store;
export default citySlice.reducer;
