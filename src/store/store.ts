import { createStore, combineReducers } from 'redux'
import TodoListReducer from './TodoList/TodoList.reducer'

const rootReducer = combineReducers({
    calculator: TodoListReducer
})

const store = createStore(rootReducer);

export default store;