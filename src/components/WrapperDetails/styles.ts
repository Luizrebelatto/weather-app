import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.blue_very_dark};
    height: 47px;
    width: 100%;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`;

export const WrapperItem = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;