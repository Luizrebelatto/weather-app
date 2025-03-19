import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../general/theme";
import WrapperDetails from "../index";

jest.mock('@expo/vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');

describe("Component WrapperNextForecast", () => {
    it('the component WrapperDetails rendered', () => {
        render(
            <ThemeProvider theme={theme}>
                <WrapperDetails
                    humidity={78}
                    precip={0.01}
                    pressure={30.12}
                />
            </ThemeProvider>
        )
    })

    it('the component icons rendered', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <WrapperDetails
                    humidity={78}
                    precip={0.01}
                    pressure={30.12}
                />
            </ThemeProvider>
        )
        
        expect(getByTestId("iconCloudRain")).toBeTruthy();
        expect(getByTestId("iconTemperature")).toBeTruthy();
        expect(getByTestId("air-humidifier")).toBeTruthy();
    })

    it('the texts humidity, precip and pressure is rendered!', () => {
        const { getByText, getByTestId } = render(
            <ThemeProvider theme={theme}>
                <WrapperDetails
                    humidity={78}
                    precip={0.01}
                    pressure={30.12}
                />
            </ThemeProvider>
        )
        
        expect(getByTestId("valueHumidity")).toHaveTextContent("78");
        expect(getByTestId("valuePressure")).toHaveTextContent("30.12");
        expect(getByTestId("valuePrecip")).toHaveTextContent("0.01");
    })
});