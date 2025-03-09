import React from "react"
import { Wrapper, Text } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
import theme from "../../general/theme";

export default function ItemForecastToday() {
    return (
        <Wrapper>
            <Text>32°C</Text>
            <Entypo name="icloud" size={30} color={theme.colors.white} />
            <Text>18:00</Text>
        </Wrapper>
    )
}