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

  it('should update current weather multiple times', () => {
    const { result } = renderHook(() => useForecastWeather());
    
    const anotherMockWeather: IForecastWeather = {
      ...mockForecastData,
      current: {
        ...mockCurrentData.current,
        temp_c: 30.5,
        precip_in: 54, 
        precip_mm: 22, 
        pressure_in: 27.88, 
        pressure_mb: 1047, 
      },
    };
    
    act(() => {
      result.current.setForecastWeather?.(mockForecastData);
    });
    
    expect(result.current.forecastWeather).toEqual(mockForecastData);
    
    act(() => {
      result.current.setForecastWeather?.(anotherMockWeather);
    });
    
    expect(result.current.forecastWeather).toEqual(anotherMockWeather);
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