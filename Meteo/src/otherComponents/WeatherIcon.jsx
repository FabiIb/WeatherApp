import Cloudy from "../assets/Cloudy.png"
import Sunny from "../assets/Sunny.png"
import Rainy from "../assets/Rainy.png"
import ModRaindSwrsDay from "../assets/ModRainSwrsDay.png"


const WeatherIcon = ({ icon }) => {
  const iconMappings = {
    "02d": Cloudy,
    "03d": Cloudy,
    "04d": Cloudy,
    "01d": Sunny,
    "01n": Sunny,
    "10d": Rainy,
    "13d": Rainy,
    "09d": Rainy,
    "11d": ModRaindSwrsDay,
  };

  const selectedIcon = iconMappings[icon] || Cloudy;

  return <img src={selectedIcon}></img>;
};

export default WeatherIcon;
