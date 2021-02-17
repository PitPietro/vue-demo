import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0,
        // list of all todos
        todos: [],
        // body of the new item
        newTodo: ''
    },

    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,

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
            state.todos.pop()
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
});

// reference: https://github.com/p-adams/simple-todo-tutorial/tree/master/simple-todo/src