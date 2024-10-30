import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #1C1C1C;
`;

export const Card = styled.View`
    border-radius: 50px;
    width: 95%;
    height: 30%;
    background-color: #40E0D0;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    border-radius: 20px;
    background-color: 	#DCDCDC;
    width: 90%;
    height: 20%;
    margin-top: 20px;
`;

export const Title = styled.Text`

    color: black;
    font-size: 20px;
    background-color: #DCDCDC;
    border-radius: 20px;
    padding: 8px;

`;

export const Button = styled.TouchableOpacity`
    background-color: #DCDCDC;
    border-radius: 20px;
    padding: 8px;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
`;