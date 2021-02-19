export function addTodos(text: string) {
    return {
        type: 'ADD_TODO',
        text,
    }
}