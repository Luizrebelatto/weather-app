import { useQuery } from "@tanstack/react-query";
import { useCurrentWeather } from "stores";
import { WeatherApi } from "../services/api.service";

const useFetchDataCurrentWeather = () => {
    const { setCurrentWeather } = useCurrentWeather();

    const queryOptions = {
        queryKey: ["dataCurrentWeather"],
        queryFn: async () => {
            const response = await WeatherApi().getForecastWeather();
            setCurrentWeather(response.data);
            return response
        }
    };

    return useQuery(queryOptions);
};

export default useFetchDataCurrentWeather;