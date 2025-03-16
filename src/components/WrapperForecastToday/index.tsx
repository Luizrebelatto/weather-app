import React, { useEffect } from "react"
import { Wrapper, Title, Day, WrapperHeader } from "./styles";
import ItemForecastToday from "../ItemForecastToday";
import { ScrollView } from "react-native"
import { IForecastWeather } from "../../stores/forecastWeather/types";

interface IWrapperForecastToday {
    data: IForecastWeather;
    isEnableCelsius?: boolean
}

export default function WrapperForecastToday({ data, isEnableCelsius }: IWrapperForecastToday) {
    const day = new Date(data?.location?.localtime).getDate();
    const month = new Date(data?.location?.localtime).toLocaleString("en-US", { month: "long" });

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
                        temperature={isEnableCelsius ? `${item.day.maxtemp_c} °C` : `${item.day.maxtemp_f} °F`}
                    />
                ))}
            </ScrollView>
        </Wrapper>
    )
}