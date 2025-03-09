import React from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Wrapper, Value, WrapperItem } from "./styles";
import theme from "../../general/theme";

export default function WrapperDetails() {
    return (
        <Wrapper>
            <WrapperItem>
                <FontAwesome5 name="cloud-rain" size={16} color={theme.colors.white} />
                <Value>6%</Value>
            </WrapperItem>
            <WrapperItem>
                <FontAwesome5 name="temperature-low" size={24} color={theme.colors.white} />
                <Value>6%</Value>
            </WrapperItem>
            <WrapperItem>
                <FontAwesome5 name="cloud-rain" size={16} color={theme.colors.white} />
                <Value>6%</Value>
            </WrapperItem>
        </Wrapper>
    )
}