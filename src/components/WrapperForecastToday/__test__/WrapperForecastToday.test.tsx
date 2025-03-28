import React from "react";
import { render } from "@testing-library/react-native";
import WrapperForecastToday from "../index";
import { IForecastWeather } from "../../../stores/forecastWeather/types";
import { ThemeProvider } from "styled-components/native";
import theme from "general/theme";

const mockData: IForecastWeather = {
    location: {
        localtime: "2024-03-28 12:00", 
    },
    forecast: {
        forecastday: [
            {
                day: {
                    condition: { text: "Sunny", icon: "//cdn.weather.com/sunny.png" },
                    maxtemp_c: 25,
                    maxtemp_f: 77,
                },
            },
            {
                day: {
                    condition: { text: "Rainy", icon: "//cdn.weather.com/rainy.png" },
                    maxtemp_c: 18,
                    maxtemp_f: 64,
                },
            },
        ],
    },
};

describe("WrapperForecastToday Component", () => {
    it("should render the title and formatted date", () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <WrapperForecastToday data={mockData} />
            </ThemeProvider>
        );
        
        expect(getByText("Today")).toBeTruthy();
        expect(getByText("March 28")).toBeTruthy();
    });

    it("should render the forecast items correctly", () => {
        const { getByText, getAllByTestId } = render(
            <ThemeProvider theme={theme}>
                <WrapperForecastToday data={mockData} />
            </ThemeProvider>
        );
        
        expect(getByText("Sunny")).toBeTruthy();
        expect(getByText("Rainy")).toBeTruthy();

        expect(getByText("77 °F")).toBeTruthy();
        expect(getByText("64 °F")).toBeTruthy();

        expect(getAllByTestId("item-forecast-today")).toHaveLength(2);
    });

    it("should switch to Celsius when isEnableCelsius is true", () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <WrapperForecastToday data={mockData} isEnableCelsius={true} />
            </ThemeProvider>
        );
        
        expect(getByText("25 °C")).toBeTruthy();
        expect(getByText("18 °C")).toBeTruthy();
    });

    it("should handle missing forecast data gracefully", () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <WrapperForecastToday data={{} as IForecastWeather} />
            </ThemeProvider>
        );
        
        expect(getByText("Today")).toBeTruthy();
    });
});
