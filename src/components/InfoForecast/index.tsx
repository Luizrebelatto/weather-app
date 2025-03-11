import React from "react";
import { Wrapper, Temperature, IconImage, Description } from "./styles";

interface IInfoForecast {
    temperature: number;
    iconImage: string;
    description: string;
    unit: string;
}

export default function InfoForecast(data: IInfoForecast) {
    return (
        <Wrapper>
            <IconImage
                source={{ uri: `https:${data.iconImage}` }}
                resizeMode="contain"
            />
            <Temperature>{`${data.temperature} ${data.unit}`}</Temperature>
            <Description>{data.description}</Description>
        </Wrapper>
    )
}