import React from "react"
import { Wrapper, Text, ImageIcon } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
import theme from "../../general/theme";

interface IItemForecastToday {
    temperature: string;
    iconImage: string;
    description: any;
}

export default function ItemForecastToday(data: IItemForecastToday) {
    return (
        <Wrapper>
            <Text>{`${data.temperature}`}</Text>
            <ImageIcon
                source={{ uri: `https:${data.iconImage}` }}
                resizeMode="contain"
            />
            <Text>{data.description}</Text>
        </Wrapper>
    )
}