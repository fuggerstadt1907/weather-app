"use client";

import { WeatherData } from "@/types";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type Props = {
  weather: WeatherData;
};

const CurrentWeatherMetaData: React.FC<Props> = ({ weather }) => {
  return (
    <div className="text-sm space-y-2 max-w-sm">
      <p className="font-semibold text-primary-700 dark:text-primary-300">
        Gefühlt: {Math.round(weather.main.feels_like)}°
      </p>

      <div className="flex gap-4 text-gray-500 dark:text-gray-300">
        <div className="flex items-center gap-1">
          <ArrowUpwardIcon fontSize="small" />
          <span>{Math.round(weather.main.temp_max)}°</span>
        </div>
        <div className="flex items-center gap-1">
          <ArrowDownwardIcon fontSize="small" />
          <span>{Math.round(weather.main.temp_min)}°</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <WaterDropIcon fontSize="small" />
        <span>Luftfeuchtigkeit:</span>
        <span className="font-semibold text-primary-700 dark:text-primary-300">
          {weather.main.humidity}%
        </span>
      </div>

      <div className="flex items-center gap-2">
        <AirIcon fontSize="small" />
        <span>Wind:</span>
        <span className="font-semibold text-primary-700 dark:text-primary-300">
          {Math.round(weather.wind.speed * 3.6)} km/h
        </span>
      </div>

      <div className="flex items-center gap-2">
        <CompressIcon fontSize="small" />
        <span>Druck:</span>
        <span className="font-semibold text-primary-700 dark:text-primary-300">
          {weather.main.pressure} hPa
        </span>
      </div>
    </div>
  );
};

export default CurrentWeatherMetaData;
