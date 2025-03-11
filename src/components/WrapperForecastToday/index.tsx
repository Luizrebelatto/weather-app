import React, { useEffect } from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Wrapper, Title, Day, WrapperHeader } from "./styles";
import theme from "../../general/theme";
import ItemForecastToday from "../ItemForecastToday";
import { ScrollView } from "react-native"
import { IForecastWeather } from "../../stores/forecastWeather/types";


export default function WrapperForecastToday(data: IForecastWeather) {

    useEffect(() => {
        console.log("linha 13: ", data.forecast.forecastday[0])
    },[])
    return (
        <Wrapper>
            <WrapperHeader>
                <Title>Today</Title>
                <Day>{data.location.localtime}</Day>
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