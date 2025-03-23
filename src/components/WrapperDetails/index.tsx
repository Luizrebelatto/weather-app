import React from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Wrapper, Value, WrapperItem } from "./styles";
import theme from "general/theme";

interface IWrapperDetails {
    humidity: number;
    precip: number;
    pressure: number;
}

export default function WrapperDetails(data: IWrapperDetails) {
    return (
        <Wrapper>
            <WrapperItem>
                <FontAwesome5 testID="iconCloudRain" name="cloud-rain" size={16} color={theme.colors.white} />
                <Value testID="valuePrecip">{data.precip}</Value>
            </WrapperItem>
            <WrapperItem>
                <FontAwesome5 testID="iconTemperature" name="temperature-low" size={24} color={theme.colors.white} />
                <Value testID="valuePressure">{data.pressure}</Value>
            </WrapperItem>
            <WrapperItem>
                <MaterialCommunityIcons testID="air-humidifier" name="air-humidifier" size={16} color={theme.colors.white} />
                <Value testID="valueHumidity">{data.humidity}</Value>
            </WrapperItem>
        </Wrapper>
    )
}