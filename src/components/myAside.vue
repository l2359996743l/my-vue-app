<template>
  <el-aside class="myside">
    <!-- <el-scrollbar class="scroll_bar" style="background: #1f2d3d"> -->
        <el-menu
        style="height: 100%"
        :default-active="openMenuIndex"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        text-color="rgb(204, 198, 198)"
        background-color="#1f2d3d"
        >
        <div class="side_title">{{isCollapse ? '后台' : '通用后台管理系统'}}</div>
        <!-- noChildrenMenu -->
        <el-menu-item @click="clickMenu(item)" v-for="item of noChildren" :key="item.path" :index="item.path">
            <el-icon>
                <component :is="item.icon" />
            </el-icon>
          <template #title>{{item.label}}</template>
        </el-menu-item>
        <!-- hasChildrenMenu -->
        <el-sub-menu v-for="item of hasChildren" :key="item.path" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.icon"/>
                </el-icon>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item @click="clickMenu(c)" v-for="c in item.children" :key="c.path" :index="c.path">
                <template #title>
                    <el-icon>
                        <component :is="c.icon" />
                    </el-icon>
                    <span>{{c.label}}</span>
                </template>
            </el-menu-item>
        <!-- <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu> -->
        </el-sub-menu>
      </el-menu>
    <!-- </el-scrollbar> -->
  </el-aside>
</template>

<script>
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useRouter,useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
    components: {IconMenu},
    setup() {
        let router = useRouter()
        let route = useRoute()
        let store = useStore()
        console.log('store:',store);
        const data = reactive({
            openMenuIndex: '/',
            menu: [
                {
                    path: '/',
                    name: 'Home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'Mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'User',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    path: '/other',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'Page1',
                            label: '页面',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'Page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        },
                    ]
                },
            ],
            isCollapse: computed(() => store.state.tag.isCollapse),
            hasChildren: computed(() => data.menu.filter(o => o.children)),
            noChildren: computed(() => data.menu.filter(o => !o.children)),
        })
        const methods = {
            clickMenu(item) {
                router.push({name: item.name})
            },
            handleOpen(key, keyPath) {
                data.openMenuIndex = key
                console.log(key,keyPath);
            },
            handleClose(key, keyPath) {
                data.openMenuIndex = key
                console.log(key,keyPath);
            }
        }
        return {
            ...toRefs(data),
            ...methods
        };
    },
});
</script>

<style lang="less">
.myside {
  background-color: #fff;
  overflow: hidden;
  padding: 0;
  .scroll_bar_item {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 4px;
    background: #fff;
    color: var(--el-color-primary);
  }
//   .el-menu-vertical-demo:not(.el-menu--collapse) {
//     // width: 200px;
//     // min-height: 400px;
//   }
  .side_title {
    color: rgb(204, 198, 198);
    text-align: center;
    padding: 15px 0;
  }
}
</style>
