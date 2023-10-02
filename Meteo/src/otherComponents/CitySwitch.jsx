
import { useDispatch, useSelector } from "react-redux";
import { StayledSmallCity } from "../components/ComponetSmallCity/StyledSmallCity"
import { setMainCity } from "../Slices";
import { selectCity } from "../Slices";
import Plus from "../assets/Plus.png"
const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    minHeight: "400px"
}

const CitySwitch = () => {

    const state = useSelector(selectCity);
    /* console.log(state) */
    const dispatch = useDispatch();

    const setMainCityHandler = (city) => {
        dispatch(setMainCity(city));
    }

    const cities = [{ ...state.city_0, position: 0 }, { ...state.city_1, position: 1 }, { ...state.city_2, position: 2 }]
    const mainCity = state.mainCity

    return (

        <div className={"switch"} style={style}>
            <div className="aggiungi-città">
                <img src={Plus} alt="Plus" />
                <h2>Aggiungi Città</h2>
            </div>
            {cities
                .filter((city) => city.name !== mainCity.name)
                .map((city) => (
                    <StayledSmallCity
                        key={city.name}
                        setMainCity={setMainCityHandler}
                        data={city.data}
                        name={city.name}
                        position={city.position}
                    />

                ))}

        </div>

    )
}

export default CitySwitch