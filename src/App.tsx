import React from 'react';

import { Provider } from 'react-redux'

import TodoList from './components/TodoList/TodoList';
import store from './store/store'


const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
