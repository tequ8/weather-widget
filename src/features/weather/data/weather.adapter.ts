import {WeatherModel} from "./weather.model";

export function adapterWeatherModel(res:any):WeatherModel {
  return {
    id: res.id,
    main: res.weather[0].main,
    description: res.weather[0].description,
    city: res.name,
    temp: res.main.temp.toFixed(),
    icon: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
    sunset: res.sys.sunset,
    sunrise: res.sys.sunrise,
    date: new Date()
  }
}

