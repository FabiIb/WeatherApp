
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LocalDate from "../../otherComponents/LocalDate";
import { getForecast, getWeatherCity } from "../../fetchData";
import WeatherIcon from "../../otherComponents/WeatherIcon";
import { useEffect } from "react";
import { setMainCity, updateCityInfo } from "../../Slices";
import { selectCity, setMainCityDetails } from "../../Slices";

const objIsEmpty = (obj) => !obj || Object.keys(obj).length === 0 ? true : false;

const MajorCity = ({ className }) => {
    const { mainCity, city_0, city_1, city_2 } = useSelector(selectCity);
    const { name, data } = mainCity;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async (city, isMainCity, cityPosition) => {
            if (isMainCity) {
                const res = await getForecast({ ...city.coord });
                dispatch(setMainCityDetails(res.data));
            } else {
                const res = await getWeatherCity(city.name);
                dispatch(updateCityInfo({ position: cityPosition, info: res.data }))
            }
        };

        if (data && (data.coord || (objIsEmpty(data.coord) && mainCity.lat && mainCity.lon))) {
            let dataToSend = data;
            if (objIsEmpty(data.coord)) {
                dataToSend = { ...data, coord: { lat: mainCity.lat, lon: mainCity.lon } }
            }
            fetchData(dataToSend, true, '');
        }

        if (mainCity && objIsEmpty(mainCity.data)) {
            fetchData(city_0, false, 'mainCity');
        }

        if (city_0 && objIsEmpty(city_0.data)) {
            fetchData(city_0, false, 'city_0');
        }

        if (city_1 && objIsEmpty(city_1.data)) {
            fetchData(city_1, false, 'city_1');
        }

        if (city_2 && objIsEmpty(city_2.data)) {
            fetchData(city_2, false, 'city_2');
        }
    }, [mainCity, city_0, city_1, city_2, name, data, dispatch]);


    return (
        <div className={className + " card"} style={{ backgroundImage: (data && data.weather ? data.weather[0].icon : "") }}>
            {data && data.weather ? (
                <>
                    <div className="text">
                        <h1 className="name">{name}</h1>
                        <LocalDate timezone={data.timezone} />
                        <p>{data.weather[0].main}</p>
                    </div>
                    <div className="elevated card">
                        <div className="temp">
                            <p>{Math.round(data.main.temp - 273.15)}°</p>
                        </div>
                        <div>
                            <WeatherIcon icon={data.weather[0].icon} />
                        </div>
                    </div>
                </>
            ) : (
                <div className="text">
                </div>
            )}
        </div>
    )
}

export default MajorCity