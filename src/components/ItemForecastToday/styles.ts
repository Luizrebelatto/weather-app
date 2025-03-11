import styled from "styled-components/native";

export const Wrapper = styled.View`
    width: 70px;
    height: 155px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.blue_medium};
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`;

export const ImageIcon = styled.Image`
    width: 40px;
    height: 40px;
`;