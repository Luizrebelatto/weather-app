import { api } from "./api"
import apiConfig from "./api.config";

export function WeatherApi(){
    async function getCurrentWeather(): Promise<any> {
        try {
            const response = await api().get(`current.json?q=cachoeirinha&key=${apiConfig.API_KEY}`);
            console.log("ssss")
            return response;
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return { getCurrentWeather }
}