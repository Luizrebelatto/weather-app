import styled from "styled-components/native";

export const Wrapper = styled.View`
    align-items: center;
`;

export const Temperature = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 64px;
    font-weight: 600;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 400;
`;

export const IconImage = styled.Image`
    width: 120px;
    height: 120px;
    border: 1px solid white;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
`;