import { createStore } from 'vuex';


export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        incCounter(state) {
            state.counter++;
        },
        decCounter(state) {
            state.counter--;
        }
    },
    actions: {
        commitInc({ commit }) {
            commit('incCounter');
        },
        commitDec({ commit }) {
            commit('decCounter');
        }
    },
    modules: {

    },
    getters: {
        getSquare(state) {
            return state.counter * state.counter;
        }
    }
});
