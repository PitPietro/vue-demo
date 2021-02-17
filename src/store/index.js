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
    },

    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos,

        completedTodos: state => state.todos.filter((todo) => {
            return todo.completed
        }),
    }
});

// reference: https://github.com/p-adams/simple-todo-tutorial/tree/master/simple-todo/src