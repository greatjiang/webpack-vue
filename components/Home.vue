<template>
    <transition name="slide-fade">
        <div>
            <el-header class="header">
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#409EFF" active-text-color="#ffd04b" text-color="#fff">
                    <el-submenu index="2">
                    <template slot="title">欢迎，{{username}}</template>
                    <el-menu-item index="2-1" class="exit-menu" @click="change">换一换</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside>
                    <el-col width="100%">
                        <el-menu
                        :router="true"
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <!-- <el-submenu>
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>任务管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="search" class="is-active">任务查询</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu> -->
                        <el-menu-item index="search">
                            <i class="el-icon-menu"></i>
                            <span slot="title">任务查询</span>
                        </el-menu-item>
                        <el-menu-item index="setting">
                            <i class="el-icon-menu"></i>
                            <span slot="title">系统设置</span>
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-aside>
                <el-main>
                    <transition>
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </div>
    </transition>
</template>
<script>
export default {
    name:'Home',
    computed:{
        username(){
            // return this.$store.state.user.name;
            return this.$store.getters.rename;
        }
    },
    created(){
        // this.$store.commit('updateName');
    },
    methods:{
        change() {
            console.log('change');
            this.$store.dispatch('change');
            // this.$store.commit('updateName');
        }
    }
}
</script>
<style scoped>
    body {
        padding: 0;
        margin: 0;
        height: 100%;
        background-color: #fff;
    }
    div{
        padding: 0;
        margin:0;
    }
    .el-menu--horizontal .el-submenu, .el-menu--horizontal .el-menu-item {
        float: right;
    }
    .el-header{
        width: 100%;
        padding: 0;
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }

    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .slide-fade-enter, .slide-fade-leave-active {
      transition: translateX(-430px);
      opacity: 0;
    }
</style>

