import React from "react";
import { render } from "@testing-library/react-native";

import { ThemeProvider } from "styled-components/native";
import theme from "general/theme";
import ItemForecastToday from "../index";

test('the component ItemForecastToday rendered', () => {
    render(
        <ThemeProvider theme={theme}>
            <ItemForecastToday
                description="Sunny" 
                iconImage="//cdn.weatherapi.com/weather/64x64/day/116.png"
                temperature="86.3 °F"
                
            />
        </ThemeProvider>
    )
})