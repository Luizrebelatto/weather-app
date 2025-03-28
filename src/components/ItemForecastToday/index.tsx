import React, { useEffect } from "react"
import { Wrapper, Text, ImageIcon } from "./styles";

interface IItemForecastToday {
    temperature: string;
    iconImage: string;
    description: any;
}

export default function ItemForecastToday(data: IItemForecastToday) {
    return (
        <Wrapper testID="item-forecast-today">
            <Text>{`${data.temperature}`}</Text>
            <ImageIcon
                source={{ uri: `https:${data.iconImage}` }}
                resizeMode="contain"
            />
            <Text>{data.description}</Text>
        </Wrapper>
    )
}