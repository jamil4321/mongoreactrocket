export default (state, action) => {
    switch (action.type) {
        case 'GETITEMS':
            return {
                ...state,
                todo: action.payload,
                loading: false
            }
        case 'DELETE':
            return {
                ...state,
                todo: state.todo.filter(t => t.id !== action.payload)
            }
        case 'ADD':
            return {
                todo: [...state.todo]
            }
        case 'UPDATE':
            const upadteTodo = action.payload;
            const updatedTodos = state.todo.map(t => {
                if (t.id === upadteTodo._id.$oid) {
                    return upadteTodo
                }
                return t
            })
            return {
                todo: updatedTodos
            }
        default:
            return state
    }

}