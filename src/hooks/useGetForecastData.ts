import { useQuery } from "@tanstack/react-query";
import { fetchForecastByCity } from "@/services";
import { ForecastResponse } from "@/types";

export const useGetForecastData = (city: string) => {
  return useQuery<ForecastResponse>({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecastByCity(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
