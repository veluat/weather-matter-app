import React, {useEffect, useState} from 'react';
import s from './WeatherApp.module.scss';
import search_icon from './../assets/search.png';
import cloud_icon from './../assets/cloud.png';
import wind_icon from './../assets/wind.png';
import humidity_icon from './../assets/humidity.png';
import clear_icon from './../assets/clear.png';
import drizzle_icon from './../assets/drizzle.png';
import snow_icon from './../assets/snow.png';
import rain_icon from './../assets/rain.png';

type ResponseWeatherDataType = {
    main: {
        temp: number;
        humidity: number;
    }
    wind: {
        speed: number;
    }
    name: string;
    weather: {
        icon: string
    }
}

export const WeatherApp: React.FC = () => {
    let api_key = process.env.REACT_APP_API_KEY;
    const [weatherIcon, setWeatherIcon] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [temperature, setTemperature] = useState('');
    const [location, setLocation] = useState('Minsk');

    const search = async () => {
        if (location === '') {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data: ResponseWeatherDataType = await response.json();

        setHumidity(data.main.humidity.toString());
        setWind(Math.floor(data.wind.speed).toString());
        setTemperature(Math.floor(data.main.temp).toString());
        setLocation(data.name);

        if (data.weather.icon === '01d' || data.weather.icon === '01n') {
            setWeatherIcon(clear_icon)
        } else if (data.weather.icon === '02d' || data.weather.icon === '02n') {
            setWeatherIcon(cloud_icon)
        } else if (data.weather.icon === '03d' || data.weather.icon === '03n') {
            setWeatherIcon(drizzle_icon)
        } else if (data.weather.icon === '04d' || data.weather.icon === '04n') {
            setWeatherIcon(drizzle_icon)
        } else if (data.weather.icon === '09d' || data.weather.icon === '09n') {
            setWeatherIcon(rain_icon)
        } else if (data.weather.icon === '10d' || data.weather.icon === '10n') {
            setWeatherIcon(rain_icon)
        } else if (data.weather.icon === '13d' || data.weather.icon === '13n') {
            setWeatherIcon(snow_icon)
        } else {
            setWeatherIcon(clear_icon)
    }
};
        const fetchData = async () => {
            await search();
        };

        useEffect(() => {
            fetchData();
        }, []);

return (
    <div className={s.container}>
        <div className={s.topBar}>
            <input
                type="text"
                className={s.cityInput}
                placeholder="Search"
                onChange={(event) => setLocation(event.currentTarget.value)}
            />
            <div className={s.seachIcon} onClick={search}>
                <img src={search_icon} alt="search"/>
            </div>
        </div>
        <div className={s.weatherImage}>
            <img src={weatherIcon} alt="weather"/>
        </div>
        <div className={s.weatherTemp}>{temperature} °C</div>
        <div className={s.weatherLocation}>{location}</div>
        <div className={s.dataContainer}>
            <div className={s.element}>
                <img src={humidity_icon} alt="humidity" className={s.icon}/>
                <div className={s.data}>
                    <div className={s.humidityPercent}>{humidity} %</div>
                    <div className={s.text}>Humidity</div>
                </div>
            </div>
            <div className={s.element}>
                <img src={wind_icon} alt="wind" className={s.icon}/>
                <div className={s.data}>
                    <div className={s.windRate}>{wind} km/h</div>
                    <div className={s.text}>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
);
}
;