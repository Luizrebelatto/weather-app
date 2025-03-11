import { IWeather } from "../stores/currentWeather/types";
import { IForecastWeather } from "../stores/forecastWeather/types";
import { api } from "./api"
import apiConfig from "./api.config";

export function WeatherApi(){
    async function getCurrentWeather(): Promise<any> {
        try {
            const response = await api().get(`current.json?q=cachoeirinha&key=${apiConfig.API_KEY}`);
            return response.data;
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function getForecastWeather(): Promise<any> {
        try {
            const response = await api().get(`forecast.json?q=cachoeirinha&days=14&key=${apiConfig.API_KEY}`);
            return response;
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return { getCurrentWeather, getForecastWeather }
}