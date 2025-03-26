import { renderHook, act } from '@testing-library/react-native';
import { useCurrentWeather } from 'stores';
import { IWeather } from '../types';
import { mockCurrentData } from '../../../../mocks/mockCurrentData';

describe('useCurrentWeather Store', () => {
  it('should initialize with null current weather', () => {
    const { result } = renderHook(() => useCurrentWeather());
    
    expect(result.current.currentWeather).toBeNull();
  });

  it('should set current weather correctly', () => {
    const { result } = renderHook(() => useCurrentWeather());
    
    act(() => {
      result.current.setCurrentWeather?.(mockCurrentData);
    });
    
    expect(result.current.currentWeather).toEqual(mockCurrentData);
  });

  it('should update current weather multiple times', () => {
    const { result } = renderHook(() => useCurrentWeather());
    
    const anotherMockWeather: IWeather = {
      ...mockCurrentData,
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
      result.current.setCurrentWeather?.(mockCurrentData);
    });
    
    expect(result.current.currentWeather).toEqual(mockCurrentData);
    
    act(() => {
      result.current.setCurrentWeather?.(anotherMockWeather);
    });
    
    expect(result.current.currentWeather).toEqual(anotherMockWeather);
  });

  it('should handle setting weather to null', () => {
    const { result } = renderHook(() => useCurrentWeather());
    
    act(() => {
      result.current.setCurrentWeather?.(mockCurrentData);
    });
    
    expect(result.current.currentWeather).toEqual(mockCurrentData);
    
    act(() => {
      result.current.setCurrentWeather?.(null as any);
    });
    
    expect(result.current.currentWeather).toBeNull();
  });
});