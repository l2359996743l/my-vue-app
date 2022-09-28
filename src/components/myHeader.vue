<template>
  <el-header class="myheader">
    <div class="dflex">
        <el-button @click="changeStatus" icon="menu" size="small" text></el-button>
        <div>面包屑</div>
    </div>
    <div>dropdown</div>
  </el-header>
</template>

<script>
import { defineComponent,toRefs,reactive, provide } from 'vue'

export default defineComponent({
    setup() {
        const data = reactive({
            isCollapse :false
        })
        let methods = {
            changeStatus() {
                data.isCollapse = !data.isCollapse
                provide('isCollapse',data.isCollapse)
            }
        }
        return {
            ...toRefs(data),
            ...methods
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
    }
</style>