import React from "react";
import { Wrapper } from "./styles";
import theme from "../../general/theme";
import InfoForecast from "../../components/InfoForecast";
import WrapperDetails from "../../components/WrapperDetails";
import WrapperForecastToday from "../../components/WrapperForecastToday";
// import WrapperNextForecast from "../../components/WrapperNextForecast";
import { View } from "react-native"
import WrapperNextForecast from "../../components/WrapperNextForecast";

export default function Home() {
    return (
        <Wrapper
            colors={[
                theme.colors.blue_dark, 
                theme.colors.blue_medium, 
                theme.colors.blue_soft
            ]}
        >
            <View style={{ gap: 20, width: "100%" }}>
                <InfoForecast/>
                <WrapperDetails/>
                <WrapperForecastToday/>
                <WrapperNextForecast/>
            </View>
        </Wrapper>
    )
}