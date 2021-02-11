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
        get_todo(state, todo) {
            state.newTodo = todo
        },
        add_todo: state => state.todos.push({
            body: state.newTodo,
            completed: false
        }),
        edit_todo(state, todo) {
            const tmpTodos = state.todos;
            tmpTodos.splice(tmpTodos.indexOf(todo), 1);
            state.todos = tmpTodos;
            state.newTodo = todo.body
        },
        remove_todo(state, todo) {
            const tmpTodos = state.todos;
            tmpTodos.splice(tmpTodos.indexOf(todo), 1);
        },
        complete_todo(state, todo) {
            todo.completed = !todo.completed
        },
        clear_todo: state => state.newTodo = ''
    },

    actions: {
        getTodo({commit}, todo) {
            commit('get_todo', todo)
        },
        addTodo({commit}) {
            commit('add_todo')
        },
        editTodo({commit}, todo) {
            commit('edit_todo', todo)
        },
        removeTodo({commit}, todo) {
            commit('remove_todo', todo)
        },
        completeTodo({commit}, todo) {
            commit('complete_todo', todo)
        },
        clearTodo({commit}) {
            commit('clear_todo')
        }
    },

    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {
            return !todo.completed
        }),
        completedTodos: state => state.todos.filter((todo) => {
            return todo.completed
        }),
    }
});

// reference: https://github.com/p-adams/simple-todo-tutorial/tree/master/simple-todo/src