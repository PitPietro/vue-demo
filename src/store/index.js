import Vue from 'vue';
import Vuex from 'vuex';
import {todoStore} from "@/store/todoStore";
import {counterStore} from "@/store/counterStore";

Vue.use(Vuex)

// TODO make different modules

export const store = new Vuex.Store({
    modules: {
        counter: counterStore,
        todo: todoStore
    }
});

// reference: https://github.com/p-adams/simple-todo-tutorial/tree/master/simple-todo/src