import { useDispatch, useSelector } from "react-redux";
import { selectCity, setCityData, setMainCity } from "../../Slices";
import { useState } from "react";
import { Title } from "../Typography";
import { getWeatherCity, getWeatherByCoords } from "../../fetchData";
import Search from "../../assets/Search.png"
import Location from "../../assets/Location.png"

const Form = ({ className }) => {
    const state = useSelector(selectCity);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleWeatherData = async (data) => {
        const position = state.mainCity.position !== undefined ? state.mainCity.position : 0;

        try {
            if (data) {
                dispatch(setCityData({ name: data.name, data, position }));
                dispatch(setMainCity({ name: data.name, data, position }));
            }
        } catch (error) {
            console.error("Errore nella gestione dei dati meteo:", error);
        }
    }

    const searchHandler = async () => {
        try {
            const res = await getWeatherCity(value);
            handleWeatherData(res.data);
        } catch (error) {
            console.error("Errore nella ricerca della città:", error);
        }
    }

    const localzationHandler = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                try {
                    const res = await getWeatherByCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                    handleWeatherData(res.data);
                } catch (error) {
                    console.error("Errore nella localizzazione:", error);
                }
            });
        }
    }

    return (
        <div className={className}>
            <div className="title-wrapper">
                <Title>Search City</Title>
            </div>
            <div className="card input-wrapper">
                <input
                    name="city-name"
                    value={value}
                    placeholder="ex. Miami"
                    onChange={(e) => handleInputChange(e)}
                    className="input"
                    type="text"
                />
                <button className="card button-search" onClick={() => searchHandler(value)}>
                    <img src={Search} alt="Search" />
                </button>
            </div>
            <div className="title-wrapper">
                <Title>Localization</Title>
            </div>
            <button onClick={() => localzationHandler()} className="card localization-button">
                <img src={Location} alt="Location" />
                Add localization
            </button>
        </div>
    )
}

export default Form;