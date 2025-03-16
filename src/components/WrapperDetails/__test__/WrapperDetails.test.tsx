import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../general/theme";
import WrapperDetails from "../index";

jest.mock('@expo/vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');

test('the component WrapperDetails rendered', () => {
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