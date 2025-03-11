import { create } from 'zustand';
import { IWeather } from './types';

interface Weather {
  currentWeather: IWeather | null;
  setCurrentWeather?: (current: IWeather) => void;
}

const useCurrentWeather = create<Weather>((set) => ({
  currentWeather: null,
  setCurrentWeather: (currentWeather) => set({ currentWeather }),
}));

export default useCurrentWeather;


