import axios from "axios";
const apiUrlCurrentWeather = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "inserire apiKey";
const apiurlForecast = "https://api.openweathermap.org/data/3.0/onecall?";
console.log(apiurlForecast);

export const getWeatherCity = async (name) => {
  const data = await axios
    .get(apiUrlCurrentWeather, { params: { q: name, apiKey: apiKey } })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getWeatherByCoords = async ({ lat, lon }) => {
  const data = await axios
    .get(apiUrlCurrentWeather, {
      params: { lat: lat, lon: lon, apiKey: apiKey },
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getForecast = async ({ lat, lon }) => {
  const data = await axios.get(apiurlForecast, { params: { lat: lat, lon: lon, appid: apiKey } }).catch((err) => {
    console.log(err);
  })
  return data
};

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(apiurlForecast, {
      params: {
        lat: lat,
        lon: lon,
        exclude: 'minutely,hourly',
        appid: apiKey,
      },
    });


    const weatherData = response.data;

    return {
      wind: weatherData.current.wind_speed,
      humidity: weatherData.current.humidity,
      uvIndex: weatherData.current.uvi,
      dewPoint: weatherData.current.dew_point,
      day: weatherData.daily[0].dt,
      maxTemp: weatherData.daily[1].temp.max,
      minTemp: weatherData.daily[1].temp.min,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
