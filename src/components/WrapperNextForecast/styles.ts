import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.blue_very_dark};
    width: 100%;
    border-radius: 20px;
    height: 70px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 20px;
`;

export const WrapperHeader = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 10px 20px;
`;