import { useSelector } from "react-redux";
import { selectCity } from "../Slices";
import { StyledDays } from "../components/ComponentDays/StyledDays";
import { StyledHours } from "../components/ComponentHours/StyledHours";

const Details = () => {

    const state = useSelector(selectCity);

    return (
        <>

            <StyledHours hours={state.mainCityDetails.hourly} />
            <StyledDays days={state.mainCityDetails.daily} />

        </>
    )
}

export default Details
