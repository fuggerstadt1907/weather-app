"use client";

import { createContext, useState } from "react";

interface WeatherContextValue {
  city: string;
  setCity: (city: string) => void;
}

export const WeatherContext = createContext<WeatherContextValue | undefined>(
  undefined
);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useState("");

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
