<template>
  <el-aside class="myside">
    <el-scrollbar class="scroll_bar" style="background: #1f2d3d">
        <el-menu
        style="margin-right: -1px"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        text-color="rgb(204, 198, 198)"
        background-color="#1f2d3d"
        >
        <div class="side_title">后台通用管理系统</div>
        <!-- noChildrenMenu -->
        <el-menu-item  v-for="item of noChildren" :key="item.path" :index="item.path">
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
            <el-menu-item v-for="c in item.children" :key="c.path" :index="c.path">
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
    </el-scrollbar>
  </el-aside>
</template>

<script>
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useRouter,useRoute } from 'vue-router'
export default defineComponent({
    components: {IconMenu},
    setup() {
        let router = useRouter()
        let route = useRoute()
        console.log('luyou: ',router,route);
        const data = reactive({
            isCollapse: false,
            menu: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    // path: '/other',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        },
                    ]
                },
            ],
            hasChildren: computed(() => data.menu.filter(o => o.children)),
            noChildren: computed(() => data.menu.filter(o => !o.children)),
        })
        const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
        };
        const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
        };

        return {
            ...toRefs(data),
            handleOpen,
            handleClose,
        };
    },
});
</script>

<style lang="less">
.myside {
  background-color: #fff;
  overflow: hidden;
  padding: 0;
  .scroll_bar {
    // height: 100%;
  }
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
  }
  .side_title {
    color: rgb(204, 198, 198);
    text-align: center;
    padding: 15px 0;
  }
}
</style>
