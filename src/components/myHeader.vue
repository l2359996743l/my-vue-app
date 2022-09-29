<template>
  <el-header class="myheader">
    <div class="dflex">
        <el-button @click="changeStatus" icon="menu" size="small" text></el-button>
        <div>首页</div>
    </div>
    <div>
        <el-dropdown trigger="click" @command="handleDrop" >
           <img :src="imgPath" class="userIcon">
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item :tabindex="0">个人中心</el-dropdown-item>
                <el-dropdown-item :tabindex="1">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { defineComponent,toRefs,reactive } from 'vue'
import { useStore } from 'vuex'
import imgPath from '../assets/img/icon.png'

export default defineComponent({
    setup() {
        const { commit } = useStore()
        const data = reactive({
            isCollapse :false,
           
        })
        let methods = {
            changeStatus() {
                commit('COLLAPSEMENU')
            },
            handleDrop(tabIndex) {
                console.log('tabIndex',tabIndex);
            }
        }
        return {
            ...toRefs(data),
            ...methods,
            imgPath
        }
    },
})
</script>


<style lang="less">
    .myheader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #999;
        .dflex {
            display: flex;
            >button {
                margin-right: 10px;
            }
        }
        .userIcon {
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }
</style>