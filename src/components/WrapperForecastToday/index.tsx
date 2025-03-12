import React, { useEffect } from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Wrapper, Title, Day, WrapperHeader } from "./styles";
import theme from "../../general/theme";
import ItemForecastToday from "../ItemForecastToday";
import { ScrollView } from "react-native"
import { IForecastWeather } from "../../stores/forecastWeather/types";


export default function WrapperForecastToday(data: IForecastWeather) {
    const day = new Date(data.location.localtime).getDate();
    const month = new Date(data.location.localtime).toLocaleString("en-US", { month: "long" });

    return (
        <Wrapper>
            <WrapperHeader>
                <Title>Today</Title>
                <Day>{`${month} ${day}`}</Day>
            </WrapperHeader>
            <ScrollView 
                style={{ flexDirection: "row", paddingHorizontal: 20, paddingBottom: 20 }}
                contentContainerStyle={{ gap: 20 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data.forecast.forecastday.map((item, index) => (
                    <ItemForecastToday 
                        key={index}
                        iconImage={item.day.condition.icon}
                        description={item.day.condition.text}
                        temperature={item.day.maxtemp_c}
                    />
                ))}
            </ScrollView>
        </Wrapper>
    )
}