import React from "react"
import { Wrapper, TextInput } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";

export default function Input() {
    return (
        <Wrapper>
            <TextInput
                placeholder="Search a city"
                placeholderTextColor="#D3D3D3"
            />
            <TouchableOpacity>
                <AntDesign name="search1" size={24} color="#D3D3D3" />
            </TouchableOpacity>
        </Wrapper>
    )
}