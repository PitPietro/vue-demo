// todo store

export const todoStore = {
    state: {
        // list of all todos
        todos: [],
        // body of the new item
        newTodo: ''
    },

    mutations: {
        getTodo(state, todo) {
            state.newTodo.push(todo)
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, index) {
            // splice(index, numberOfElementsToRemove, ...)
            state.todos.splice(index, 1)
        },
        removeLastTodo(state) {
            const el = state.todos.pop()
            console.log(el)
        },
        removeFirstTodo(state) {
            state.todos.splice(0, 1)
        },
        removeAllTodos(state) {
            state.todos = []
        }
    },

    getters: {
        // newTodo: state => state.newTodo,
        todos: state => state.todos,
    }
};