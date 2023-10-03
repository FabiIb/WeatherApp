import React, { useState } from "react";
import wind from "../../assets/wind.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { getWeatherData } from "../../fetchData";
import { Title } from "../Typography";
import WeatherIcon from "../../otherComponents/WeatherIcon";
import { useEffect } from "react";
import { selectCity } from "../../Slices";
import { useSelector } from "react-redux";


const Days = ({ className, days }) => {
  const state = useSelector(selectCity);
  const [activeTab, setActiveTab] = useState(0);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (activeTab === 1) {
      const lat = state?.mainCity?.lat || state?.mainCity?.data?.coord?.lat;
      const lon = state?.mainCity?.lon || state?.mainCity?.data?.coord?.lon;

      getWeatherData(lat, lon)
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [activeTab, state.mainCity]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderTabs = () => (
    <div className="tabs">
      <Tab isActive={activeTab === 0} onClick={() => handleTabClick(0)}>This week</Tab>
      <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>This Month</Tab>
    </div>
  );

  const renderWeatherDays = () => {
    if (!days) return null;

    return (
      <div className={`card active-${activeTab}`}>
        {activeTab === 0 && (
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
            }}
          >
            {days.map((item, i) => (
              <SwiperSlide key={i}>
                <WeatherDay item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {activeTab === 1 && weatherData && (
          <div className="windContainer">
            <h6 className="h6"> {new Date(weatherData.day * 1000).toLocaleDateString("en-us", { weekday: "long", month: "long", day: "numeric" })}</h6>
            <div className="windBorder">
              <img className="windImg" src={wind} alt="" />
              <div>
                <p className="p">Wind Speed: {weatherData.wind.toFixed(1)}</p>
                <br />
                <p className="p">The high will be: {weatherData.minTemp.toFixed(1)}°C,<br />
                  the low will be{" "}{weatherData.minTemp.toFixed(1)}°C</p>
                <br />
                <p className="p">Humidity: {weatherData.humidity}%</p>
                <p className="p">UV: {weatherData.uvIndex}</p>
                <p className="p">Dew Point: {weatherData.dewPoint}°C</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className}>
      {renderTabs()}
      <div className="card-container">{renderWeatherDays()}</div>
    </div>
  );
};

const Tab = ({ isActive, onClick, children }) => (
  <div onClick={onClick} className={isActive ? 'active' : ''}>
    <Title>{children}</Title>
  </div>
);

const WeatherDay = ({ item }) => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(item.dt * 1000);
  const temp = Math.round(item.temp.day - 273.15);

  return (
    <div className="slide-content">
      <p className="day">{weekdays[date.getDay()]}</p>
      <p className="temp">{temp}°</p>
      {item.weather && item.weather[0] && (
        <WeatherIcon icon={item.weather[0].icon} />
      )}
    </div>
  );
};

export default Days;