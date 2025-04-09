"use client";

import { WeatherData } from "@/types";

type Props = {
  weather: WeatherData;
};

const CurrentWeatherMainData: React.FC<Props> = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="flex items-center gap-4">
      <img src={iconUrl} alt="Wettericon" className="w-20 h-20" />
      <div className="flex gap-2 flex-col">
        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
          {weather.name}
        </p>
        <p className="text-5xl font-bold text-primary-700 dark:text-primary-300">
          {Math.round(weather.main.temp)}°
        </p>
        <p className="text-gray-600 dark:text-gray-400 capitalize text-sm">
          {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherMainData;
