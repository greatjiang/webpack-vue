import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import taskSearch from '../components/TaskSearch.vue';
import systemSetting from '../components/SystemSetting.vue'

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            name:'home',
            meta:{
                title:'后台管理系统'
            },
            component:Home,
            children:[
                { 
                    path: '',
                    meta:{
                        title:'后台管理系统'
                    },
                    redirect: 'search' 
                },    
                {
                    path:'search',
                    meta:{
                        title:'search'
                    },
                    component:taskSearch
                },
                {
                    path:'setting',
                    meta:{
                        title:'setting'
                    },
                    component:systemSetting
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;