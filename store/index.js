import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user:{
            name:'greatjiang'
        }
    },
    getters:{
        rename:state => {
            return state.user.name+'-哈哈';
        }
    },
    actions:{
        change:(context )=> {
            context.commit('updateName');
        },
    },
    mutations:{
        updateName: (state) => {
            state.user.name = 'new jiang';
        }
    }
});