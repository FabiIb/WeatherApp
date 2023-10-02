const LocalDate = ({timezone}) => {


    const calcTime = (offset) => {
        const today = new Date();
    
        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
        var local = new Date(utc + (offset*1000));
        return local.toLocaleDateString("en-us",{ weekday:"long", month:"long", day:"numeric"})
    }

    return(
        <p className="date-string">{calcTime(timezone)}</p>
    )
}

export default LocalDate