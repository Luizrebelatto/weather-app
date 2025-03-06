import React from "react";
import { Wrapper, MaxMin, Temperature } from "./styles";

export default function InfoForecast() {
    return (
        <Wrapper>
            <Temperature>28º</Temperature>
            <MaxMin>Max: 31º Min: 25º</MaxMin>
        </Wrapper>
    )
}