import { fetchAutocompletedCity } from "@/services";
import { City } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useCitySuggestions = (query: string) => {
  return useQuery<City[]>({
    queryKey: ["city-suggestions", query],
    queryFn: () => fetchAutocompletedCity(query),
    enabled: !!query && query.length >= 2,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
