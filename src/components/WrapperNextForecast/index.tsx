import React from "react"
import Feather from '@expo/vector-icons/Feather';
import { Wrapper, Day, Title, WrapperHeader } from "./styles";
import theme from "../../general/theme";

interface IWrapperNextForecast {
    title: string;
}

export default function WrapperNextForecast(data: IWrapperNextForecast) {
    return (
        <Wrapper>
            <WrapperHeader>
                <Title>{data.title}</Title>
                <Feather testID="iconFeather" name="calendar" size={24} color={theme.colors.white} />
            </WrapperHeader>
        </Wrapper>
    )
}