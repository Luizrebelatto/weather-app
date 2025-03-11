import { create } from 'zustand';
import { IForecastWeather } from './types';

interface Weather {
  forecastWeather: IForecastWeather | null;
  setForecastWeather?: (forecast: IForecastWeather) => void;
}

const useForecastWeather = create<Weather>((set) => ({
  forecastWeather: null,
  setForecastWeather: (forecastWeather) => set({ forecastWeather }),
}));

export default useForecastWeather;


