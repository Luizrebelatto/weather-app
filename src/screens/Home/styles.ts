import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled(LinearGradient)<{ top: number }>`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    padding-left: 40px;
    padding-right: 40px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 26px;
    margin-right: 10px;
`;