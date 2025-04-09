import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCity } from "@/services";
import { WeatherData } from "@/types";

export const useGetWeatherData = (city: string) => {
  return useQuery<WeatherData>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherByCity(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
