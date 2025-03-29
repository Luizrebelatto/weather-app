import styled from "styled-components/native";

export const Wrapper = styled.View`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.blue_very_dark};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 20px;
`;

export const TextInput = styled.TextInput`
    color: ${({ theme }) => theme.colors.white};
`;


// export const Input = styled.TextInput`
//     width: 100%;
//     height: 50px;
//     border-radius: 10px;
//     border: 1px solid black;
//     background-color: ${({ theme }) => theme.colors.blue_very_dark};
//     padding-left: 10px;
//     color: ${({ theme }) => theme.colors.white};
// `;