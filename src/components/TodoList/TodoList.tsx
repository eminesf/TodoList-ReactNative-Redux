import React, { useState } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todos'

import todos from '../../reducers/todos';
import {
    Container,
    InputText,
    ButtonApp,
    Todos,
} from './styles';


const components: React.FC = (props) => {

    const state = {
        newTodoText: '',
    }

    const addNewTodo = () => {
        this.props.addTodos(this.state.newTodoText);


        this.setState({ newTodoText: '' });
    };

    return (
        <Container>
            {this.props.todos.map(todo => (
                <Todos>{todo.text}</Todos>
            ))}

            <InputText
                type="text"
                value={this.state.newTodoText}
                onChange={(e) => this.setState({ newTodoText: e.target.value })}
            ></InputText>

            <ButtonApp onClick={addNewTodo}>
                <Text>Input</Text>
            </ButtonApp>
        </Container>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(components);