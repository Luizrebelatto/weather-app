import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import theme from "../../general/theme";
import InfoForecast from "../../components/InfoForecast";
import WrapperDetails from "../../components/WrapperDetails";
import WrapperForecastToday from "../../components/WrapperForecastToday";
import { View } from "react-native"

import { WeatherApi } from "../../services/api.service";
import useCurrentWeather from "../../stores/currentWeather/currentWeather.store";

export default function Home() {
    const { setCurrentWeather, currentWeather } = useCurrentWeather()
    async function getValues() {
        try {
            const response = await WeatherApi().getCurrentWeather();
            console.log("linha 15: ", response.data)
            setCurrentWeather(response.data)
            
        } catch (error) {
            console.log("Response: ", Error)
        }    
    }


    useEffect(() => {
        console.log("kssjsjs")
        getValues()
    },[])
    return (
        <Wrapper
            colors={[
                theme.colors.blue_dark, 
                theme.colors.blue_medium, 
                theme.colors.blue_soft
            ]}
        >
            <View style={{ gap: 20, width: "100%" }}>
                <InfoForecast
                    iconImage={currentWeather.current.condition.icon}
                    temperature={currentWeather.current.temp_c}
                    description={currentWeather.current.condition.text}
                />
                <WrapperDetails
                    humidity={currentWeather.current.humidity}
                    precip={currentWeather.current.precip_mm}
                    pressure={currentWeather.current.pressure_in}
                />
                <WrapperForecastToday/>
            </View>
        </Wrapper>
    )
}