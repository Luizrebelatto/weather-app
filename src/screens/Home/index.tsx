import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";
import theme from "../../general/theme";
import InfoForecast from "../../components/InfoForecast";
import WrapperDetails from "../../components/WrapperDetails";
import WrapperForecastToday from "../../components/WrapperForecastToday";
import { View, Switch } from "react-native"

import { WeatherApi } from "../../services/api.service";
import useCurrentWeather from "../../stores/currentWeather/currentWeather.store";
import useForecastWeather from "../../stores/forecastWeather/forecastWeather.store";

export default function Home() {
    const { setCurrentWeather, currentWeather } = useCurrentWeather()
    const { forecastWeather, setForecastWeather } = useForecastWeather()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                {/* <InfoForecast
                    iconImage={currentWeather.current.condition.icon}
                    temperature={isEnabled ? currentWeather.current.temp_c : currentWeather.current.temp_f}
                    description={currentWeather.current.condition.text}
                    unit={isEnabled ? "°C" : "°F"}
                />
                <WrapperDetails
                    humidity={currentWeather.current.humidity}
                    precip={currentWeather.current.precip_mm}
                    pressure={currentWeather.current.pressure_in}
                /> */}
                {/* <WrapperForecastToday
                    current={forecastWeather.current}
                    forecast={forecastWeather.forecast}
                    location={forecastWeather.location}
                /> */}
            </View>
        </Wrapper>
    )
}