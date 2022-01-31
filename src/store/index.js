import { createStore } from 'vuex'
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import localStorage from 'vue-localstorage'





const store = createStore({
    state,
    mutations,
    getters,
    actions,
    localStorage,
})

export default store;

