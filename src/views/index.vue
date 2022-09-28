<template>
  <el-container :style="{height: windowHeight+'px'}">
    <my-aside class="l-container" />
    <el-container class="r-container">
        <my-header/>
        <my-main/>
    </el-container>
  </el-container>
</template>
<script>
import { defineComponent, reactive,toRefs} from 'vue'
import myAside from '../components/myAside.vue'
import myHeader from '../components/myHeader.vue'
import myMain from '../components/myMain.vue'
export default defineComponent({
    components: { myAside,myHeader,myMain},
    setup() {
        const data = reactive({
            windowHeight: document.body.clientHeight,
        })
        
        return {
            ...toRefs(data)
        }
    },
})
</script>
<style lang="less">
    .l-container {
        width: auto;
    }
    .r-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>


