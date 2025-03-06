import React from "react";
import { Wrapper } from "./styles";
import theme from "../../general/theme";

export default function Home() {
    return (
        <Wrapper
            colors={[
                theme.colors.blue_dark, 
                theme.colors.blue_medium, 
                theme.colors.blue_soft
            ]}
        >

        </Wrapper>
    )
}