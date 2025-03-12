import { useQuery } from "@tanstack/react-query";
import useForecastWeather from "../stores/forecastWeather/forecastWeather.store";
import { WeatherApi } from "../services/api.service";

export const useFetchDataForecastWeather = () => {
    const { setForecastWeather } = useForecastWeather();

    const queryOptions = {
        queryKey: ["dataForecastWeather"],
        queryFn: async () => {
            const response = await WeatherApi().getForecastWeather();
            setForecastWeather(response.data);
            return response
        }
    };

    return useQuery(queryOptions);
};
