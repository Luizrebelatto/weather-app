import "styled-components/native";

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            white: string;
            blue_dark: string;
            blue_medium: string;
            blue_soft: string;
            blue_very_dark: string;
        }
    }
}

