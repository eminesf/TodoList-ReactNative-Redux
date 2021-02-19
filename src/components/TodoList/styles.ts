import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    background-color: gray;
    justify-content: center;
    align-items: center;
`;

export const InputText = styled.TextInput`
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    width: 80%;
`;

export const ButtonApp = styled.TouchableOpacity`
    background-color: red;
    height: 30px;
    margin: 10px;  
    border-radius: 15px;
    width: 80%;
    justify-content: center;
    align-items: center;
`;

export const Todos = styled.Text`
    margin-top: 10px;
`;