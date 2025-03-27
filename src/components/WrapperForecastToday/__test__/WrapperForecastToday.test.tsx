import React from 'react';
import { render } from '@testing-library/react-native';
import WrapperForecastToday from '../index';

// Mock data for testing
const mockForecastData = {
    location: {
        localtime: '2024-03-26 14:30:00'
    },
    forecast: {
        forecastday: [
            {
                day: {
                    condition: {
                        icon: 'sunny.png',
                        text: 'Sunny'
                    },
                    maxtemp_c: 25,
                    maxtemp_f: 77
                }
            },
            {
                day: {
                    condition: {
                        icon: 'cloudy.png',
                        text: 'Partly Cloudy'
                    },
                    maxtemp_c: 22,
                    maxtemp_f: 72
                }
            }
        ]
    }
};

describe('WrapperForecastToday Component', () => {
    it('renders correctly with Celsius temperatures', () => {
        const { getByText, getAllByTestId } = render(
            <WrapperForecastToday 
                data={mockForecastData} 
                isEnableCelsius={true} 
            />
        );

        // Check header texts
        expect(getByText('Today')).toBeTruthy();
        expect(getByText(/March/)).toBeTruthy();
        expect(getByText(/26/)).toBeTruthy();

        // Check forecast items
        const forecastItems = getAllByTestId('item-forecast-today');
        expect(forecastItems.length).toBe(2);

        // Verify temperature display in Celsius
        expect(getByText('25 °C')).toBeTruthy();
        expect(getByText('22 °C')).toBeTruthy();
    });

    it('renders correctly with Fahrenheit temperatures', () => {
        const { getByText, getAllByTestId } = render(
            <WrapperForecastToday 
                data={mockForecastData} 
                isEnableCelsius={false} 
            />
        );

        // Check header texts
        expect(getByText('Today')).toBeTruthy();
        expect(getByText(/March/)).toBeTruthy();
        expect(getByText(/26/)).toBeTruthy();

        // Check forecast items
        const forecastItems = getAllByTestId('item-forecast-today');
        expect(forecastItems.length).toBe(2);

        // Verify temperature display in Fahrenheit
        expect(getByText('77 °F')).toBeTruthy();
        expect(getByText('72 °F')).toBeTruthy();
    });

    it('handles empty forecast data gracefully', () => {
        const emptyForecastData = {
            location: {
                localtime: '2024-03-26 14:30:00'
            },
            forecast: {
                forecastday: []
            }
        };

        const { getByText } = render(
            <WrapperForecastToday 
                data={emptyForecastData} 
                isEnableCelsius={true} 
            />
        );

        // Check that header still renders
        expect(getByText('Today')).toBeTruthy();
        expect(getByText(/March/)).toBeTruthy();
        expect(getByText(/26/)).toBeTruthy();
    });
});