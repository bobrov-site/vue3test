import {createStore} from "vuex";

export default createStore({
    //стэйт это значения по умолчанию доступные в любом месте приложения
    state: {
        likes: 2
    },
    //геттерс позволяют изменять значения стэйта
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1
        },
        decrementLikes(state) {
            state.likes -= 1
        }
    },
    actions: {

    },
    modules: {

    }
})