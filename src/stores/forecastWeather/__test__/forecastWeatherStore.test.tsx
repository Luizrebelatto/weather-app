import { renderHook, act } from '@testing-library/react-native';
import { useForecastWeather } from 'stores';
import { IForecastWeather } from '../types';
import { mockForecastData } from '../../../../mocks/mockForecastData';

describe('forecastWeather Store', () => {
  it('should initialize with null current weather', () => {
    const { result } = renderHook(() => useForecastWeather());
    
    expect(result.current.forecastWeather).toBeNull();
  });

  it('should set current weather correctly', () => {
    const { result } = renderHook(() => useForecastWeather());
    
    act(() => {
      result.current.setForecastWeather?.(mockForecastData);
    });
    
    expect(result.current.forecastWeather).toEqual(mockForecastData);
  });

  it('should handle setting weather to null', () => {
    const { result } = renderHook(() => useForecastWeather());
    
    act(() => {
      result.current.setForecastWeather?.(mockForecastData);
    });
    
    expect(result.current.forecastWeather).toEqual(mockForecastData);
    
    act(() => {
      result.current.setForecastWeather?.(null as any);
    });
    
    expect(result.current.forecastWeather).toBeNull();
  });
});