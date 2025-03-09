import React from "react"
import Feather from '@expo/vector-icons/Feather';
import { Wrapper, Day, Title, WrapperHeader } from "./styles";
import theme from "../../general/theme";


export default function WrapperNextForecast() {
    return (
        <Wrapper>
            <WrapperHeader>
                <Title>Next Forecast</Title>
                <Feather name="calendar" size={24} color={theme.colors.white} />
            </WrapperHeader>
        </Wrapper>
    )
}