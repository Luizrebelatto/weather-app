import { ThemeProvider } from "styled-components/native";
import theme from "general/theme";
import { render } from "@testing-library/react-native";
import Home from "..";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock('expo-linear-gradient', () => {
    const { View } = require('react-native');
    return {
      LinearGradient: props => <View {...props}>{props.children}</View>,
    };
});

jest.mock('@expo/vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');

jest.mock('../../../stores/currentWeather/currentWeather.store.ts', () => ({
    __esModule: true,
    default: jest.fn()
  }));
  
  jest.mock('../../stores/forecastWeather/forecastWeather.store', () => ({
    __esModule: true,
    default: jest.fn()
  }));
  
  jest.mock('../../hooks/useFetchDataCurrentWeather', () => ({
    useFetchDataCurrentWeather: jest.fn()
  }));
  
  jest.mock('../../hooks/useFetchDataForecastWeather', () => ({
    useFetchDataForecastWeather: jest.fn()
  }));

describe('Home Component', () => {
    it('the component Home rendered', () => {
        const queryClient = new QueryClient({
            defaultOptions: {
              queries: {
                retry: false,
              },
            },
        });

        render(
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Home/>
                </ThemeProvider>
            </QueryClientProvider>
        )
    })
});