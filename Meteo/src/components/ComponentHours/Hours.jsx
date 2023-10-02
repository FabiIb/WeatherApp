import { Title } from "../Typography";


const Hours = ({ className, hours }) => {
    return (
        <div className={className}>
            {hours && (
                <>
                    <div className="title-wrapper">
                        <Title>Today</Title>
                    </div>
                    <div className="wrap">
                        <div className="card scrollable">
                            {hours && (
                                <>
                                    <p className="now">Now</p>
                                    <div className="list">
                                        {hours.map((item, i) => {
                                            const date = new Date(item.dt * 1000);
                                            const temp = Math.round(item.temp - 273.15);
                                            const time = date.toLocaleTimeString('en-US', { hour: '2-digit' });
                                            return (
                                                <div key={i} className={i < 1 ? "hour-item first" : "hour-item"}>
                                                    <div className="temp">
                                                        {temp}°
                                                    </div>
                                                    <div className="time">
                                                        {i > 0 && time}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Hours