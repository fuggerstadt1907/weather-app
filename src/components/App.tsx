"use client";

import lightBg from "@/assets/bg.svg";
import darkBg from "@/assets/darkBg.svg";
import { useTheme } from "@/hooks";
import CityInput from "./search-autocomplete/CityInput";
import CurrentWeatherCard from "./current-weather/CurrentWeatherCard";
import ForecastCard from "./forecast/ForecastCard";

const App: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const backgroundImage = isDark ? darkBg : lightBg;
  const backgroundGradient = isDark
    ? { color1: "#031027", color2: "#04192b" }
    : { color1: "#F9FFFF", color2: "#38C8E6" };

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-no-repeat bg-[length:auto] bg-[position:center_120%] px-4"
      style={{
        backgroundImage: `
        url(${backgroundImage.src}),
        linear-gradient(${backgroundGradient.color1} 0%, ${backgroundGradient.color2} 100%)
      `,
      }}
    >
      <div className="max-w-[960px] mx-auto w-full pb-4">
        <CityInput />

        <div className="grid grid-cols-1 gap-6 mt-7 px-2">
          <CurrentWeatherCard />
          <ForecastCard />
        </div>
      </div>
    </main>
  );
};

export default App;
