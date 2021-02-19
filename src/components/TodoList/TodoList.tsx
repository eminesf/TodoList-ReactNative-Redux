import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    InputText,
    ButtonApp,
    Todos,
} from './styles';


const components: React.FC = () => {


    return (
        <Container>
            
                <Todos>To do list!</Todos>

            <InputText></InputText>

            <ButtonApp>
                <Text>Adicionar</Text>
            </ButtonApp>
        </Container>
    );
}



export default components;