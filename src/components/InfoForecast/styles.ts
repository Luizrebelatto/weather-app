import styled from "styled-components/native";

export const Wrapper = styled.View`
    align-items: center;
`;

export const Temperature = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 64px;
    font-weight: 600;
`;

export const MaxMin = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 400;
`;