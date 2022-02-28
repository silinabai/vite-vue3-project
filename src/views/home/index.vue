<template>
    <div>我是首页</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'Home',
    setup() {
        const store = useStore();
        onMounted(() => {
            store.commit('home/setName', 'lalal'); // 设置store
            console.log(store.state.home.name); // 获取store
        });
    },
});
</script>
