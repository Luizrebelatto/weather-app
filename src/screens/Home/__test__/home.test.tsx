import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Home from "../index"; 
import { useCurrentWeather, useForecastWeather } from "stores";
import { useFetchDataForecastWeather, useFetchDataCurrentWeather } from "hooks";
import { ThemeProvider } from "styled-components/native";
import theme from "general/theme";

jest.mock("stores", () => ({
  useCurrentWeather: jest.fn(),
  useForecastWeather: jest.fn(),
}));

jest.mock("hooks", () => ({
  useFetchDataCurrentWeather: jest.fn(),
  useFetchDataForecastWeather: jest.fn(),
}));

jest.mock("expo-linear-gradient", () => ({
    LinearGradient: jest.fn(({ children }) => children),
}));

jest.mock('@expo/vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');
jest.mock('@expo/vector-icons/Feather', () => 'Feather');
  

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render weather information after loading", async () => {
    useFetchDataCurrentWeather.mockReturnValue({ isLoading: false, error: null });
    useFetchDataForecastWeather.mockReturnValue({ isLoading: false, error: null });

    useCurrentWeather.mockReturnValue({
      currentWeather: {
        current: {
          condition: { icon: "icon-url", text: "Sunny" },
          temp_c: 25,
          temp_f: 77,
          humidity: 60,
          precip_mm: 5,
          pressure_in: 30,
        },
      },
    });

    useForecastWeather.mockReturnValue({
      forecastWeather: [{ day: { maxtemp_c: 30 } }],
    });

    render(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );

    expect(screen.getByText("Sunny")).toBeTruthy();
    expect(screen.getByText("°F")).toBeTruthy();
  });

  it("should toggle between Celsius and Fahrenheit", () => {
    useFetchDataCurrentWeather.mockReturnValue({ isLoading: false, error: null });
    useFetchDataForecastWeather.mockReturnValue({ isLoading: false, error: null });

    useCurrentWeather.mockReturnValue({
      currentWeather: {
        current: {
          condition: { icon: "icon-url", text: "Sunny" },
          temp_c: 25,
          temp_f: 77,
        },
      },
    });

    useForecastWeather.mockReturnValue({
      forecastWeather: [{ day: { maxtemp_c: 30 } }],
    });

    const { getByText, getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
    
    const switchComponent = getByTestId("temperature-switch");
    
    expect(getByText("°F")).toBeTruthy();

    fireEvent(switchComponent, "valueChange", true);

    expect(getByText("°C")).toBeTruthy();
  });

  it("should render loading indicators initially", () => {
    useFetchDataCurrentWeather.mockReturnValue({ isLoading: true, error: null });
    useFetchDataForecastWeather.mockReturnValue({ isLoading: true, error: null });

    render(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );

    expect(screen.getAllByTestId("loading-indicator")).toHaveLength(2);
  });
});
