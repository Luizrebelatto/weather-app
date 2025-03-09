import React from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Wrapper, Title, Day, WrapperHeader } from "./styles";
import theme from "../../general/theme";
import ItemForecastToday from "../ItemForecastToday";
import { ScrollView } from "react-native"

export default function WrapperForecastToday() {
    return (
        <Wrapper>
            <WrapperHeader>
                <Title>Today</Title>
                <Day>March, 5</Day>
            </WrapperHeader>
            <ScrollView 
                style={{ flexDirection: "row", paddingHorizontal: 20, paddingBottom: 20 }}
                contentContainerStyle={{ gap: 20 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {[0,0,0,0,0,0,0,0,0].map((item, index) => (
                    <ItemForecastToday key={index}/>
                ))}
            </ScrollView>
        </Wrapper>
    )
}