const LocalHour = ({ timezone }) => {

    const calcTime = (offset) => {
        const today = new Date();

        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
        var local = new Date(utc + (offset * 1000));
        return local.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <p className="time-string">{calcTime(timezone)}</p>
    )
}

export default LocalHour