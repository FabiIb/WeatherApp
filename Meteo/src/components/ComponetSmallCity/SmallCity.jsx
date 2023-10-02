import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherCity } from "../../fetchData";
import WeatherIcon from "../../otherComponents/WeatherIcon";
import { parseGradientAsIcon } from "../../otherComponents/WeatherBackground";
import LocalDate from "../../otherComponents/LocalDate";
import LocalHour from "../../otherComponents/LocalHour"
import { setCityData } from "../../Slices";

const SmallCity = ({ className, name, data, setMainCity, position }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWeatherCity(name);
                dispatch(setCityData({ data: response.data, position }));
            } catch (error) {
                console.error('Errore durante il recupero dei dati meteo:', error);
            }
        };

        fetchData();
    }, [name, dispatch, position, setCityData]);

    const handleCityClick = () => {
        setMainCity({ name, data: { ...data }, position });
    };

    return (
        <div className={`${className} card`} style={{ backgroundImage: parseGradientAsIcon(data?.weather?.[0]?.icon || '') }} onClick={handleCityClick}>
            <div className="Small-text">
                <p className="SmallCity-name">{name}</p>
                <LocalDate timezone={data.timezone} />
                <LocalHour timezone={data.timezone} />
            </div>
            {data.weather && (
                <>
                    <div>
                        <WeatherIcon icon={data.weather[0].icon} />
                    </div>
                    <div className="SmallCity-temperature">
                        <p>{Math.round(data.main.temp - 273.15)}°</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SmallCity;



