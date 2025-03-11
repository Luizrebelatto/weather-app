import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";
import theme from "../../general/theme";
import InfoForecast from "../../components/InfoForecast";
import WrapperDetails from "../../components/WrapperDetails";
import WrapperForecastToday from "../../components/WrapperForecastToday";
import { View, Switch } from "react-native"

import { WeatherApi } from "../../services/api.service";
import useCurrentWeather from "../../stores/currentWeather/currentWeather.store";

export default function Home() {
    const { setCurrentWeather, currentWeather } = useCurrentWeather()
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Title>{isEnabled ? "°C" : "°F"}</Title>
                <Switch
                    trackColor={{false: theme.colors.white, true: theme.colors.blue_soft}}
                    thumbColor={isEnabled ? theme.colors.blue_very_dark : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{ gap: 20, width: "100%" }}>
                <InfoForecast
                    iconImage={currentWeather.current.condition.icon}
                    temperature={isEnabled ? currentWeather.current.temp_c : currentWeather.current.temp_f}
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