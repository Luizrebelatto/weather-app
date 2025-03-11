import React from "react";
import { Wrapper, Temperature, IconImage, Description } from "./styles";

interface IInfoForecast {
    temperature: number;
    iconImage: string;
    description: string;
}

export default function InfoForecast(data: IInfoForecast) {
    return (
        <Wrapper>
            <IconImage
                source={{ uri: `https:${data.iconImage}` }}
                resizeMode="contain"
            />
            <Temperature>{`${data.temperature} °C`}</Temperature>
            <Description>{data.description}</Description>
        </Wrapper>
    )
}