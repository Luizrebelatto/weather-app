import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "general/theme";
import WrapperNextForecast from "../index";

jest.mock('@expo/vector-icons/Feather', () => 'FontAwesome5');

describe("Component WrapperNextForecast", () => {
    it("should render WrapperNextForecast correctly", () => {
        render(
            <ThemeProvider theme={theme}>
                <WrapperNextForecast title="Next Forecast" />
            </ThemeProvider>
        );
    });

    it("should render title correctly", () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <WrapperNextForecast title="Next Forecast" />
            </ThemeProvider>
        );

        expect(getByText("Next Forecast")).toBeTruthy();
    });

    it("should render icon feather correctly", () => {
        const { getByText, getByTestId } = render(
            <ThemeProvider theme={theme}>
                <WrapperNextForecast title="Next Forecast" />
            </ThemeProvider>
        );

        expect(getByTestId("iconFeather")).toBeTruthy();
    });
});
