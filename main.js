import Vue from 'vue';
import router from './router';
import store from './store';
import ElementUI from  'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

//全局使用插件
Vue.use(ElementUI);

new Vue({
    el:'#app',
    router,
    store,
    render: h => {
        return h(App)
    }
})