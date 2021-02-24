// counter store

export const counterStore = {
    state: {
        count: 0,
    },

    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
    },
};