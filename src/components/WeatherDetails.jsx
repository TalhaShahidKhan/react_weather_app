import { useContext } from "react";
import Cloud from "../assets/icons/cloud.svg";
import Humidity from "../assets/icons/humidity.svg";
import TempMax from "../assets/icons/temp-max.svg";
import TempMin from "../assets/icons/temp-min.svg";
import Wind from "../assets/icons/wind.svg";
import { WeatherContext } from "../contexts";

export default function WeatherDetails() {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  return (
    <>
      <div>
        <p className="mb-8 text-sm font-bold uppercase lg:text-lg">
          {weatherData.description}
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>Feels like</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.feelsLike}°</p>
              <img src={TempMax} alt="temp-max" />
            </div>
          </li>

          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.humidity}%</p>
              <img src={Humidity} alt="humidity" />
            </div>
          </li>
          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.cloud}%</p>
              <img src={Cloud} alt="cloudy" />
            </div>
          </li>
          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.wind}km/h</p>
              <img src={Wind} alt="wind" />
            </div>
          </li>
          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>UV Index</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.uvi}°</p>
              <img src={TempMin} alt="temp-min" />
            </div>
          </li>
          <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
            <span>Dew Point</span>
            <div className="inline-flex space-x-4">
              <p>{weatherData.dewPoint}°</p>
              <img src={TempMin} alt="temp-min" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
