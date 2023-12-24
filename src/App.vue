<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { ref, computed } from "vue";

const {options} = useRouter();
const route = useRoute();

const activePath = ref(['/']);
const activeBreadcrumb = computed(() => {
  const result = [...new Set(route.fullPath.split('/'))].map((res,index) => ({
    path: options.routes[index].path,
    label: options.routes[index].label
  }));
  return result;
});

</script>

<template>
  <a-layout>
    <a-layout-header>
      <div class="menuTitle">
        ZHENWU
      </div>
      <a-menu mode="horizontal" v-model:selectedKeys="activePath" class="menuWrapper" theme="dark">
        <a-menu-item v-for="item in options.routes" :key="item.path">
          <RouterLink :to="item.path">{{item.label}}</RouterLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div style="background: #fff;padding: 24px;min-height: 780px">
        <RouterView/>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.menuTitle {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  line-height: 31px;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  color: #fff;
}
.menuWrapper {
  float: right;
}
</style>
