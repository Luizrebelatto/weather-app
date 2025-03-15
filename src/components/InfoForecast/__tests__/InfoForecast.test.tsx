import React from "react";
import { render } from "@testing-library/react-native";
import InfoForecast from "../index";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../general/theme";

test('the component InfoForecast rendered', () => {
    render(
        <ThemeProvider theme={theme}>
            <InfoForecast 
                description="Partly cloudy" 
                iconImage="//cdn.weatherapi.com/weather/64x64/day/116.png"
                temperature={78.8}
                unit="°F"
            />
        </ThemeProvider>
    )
})