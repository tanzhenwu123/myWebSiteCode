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
  console.log(route);
  return result;
});

</script>

<template>
  <a-layout>
    <a-layout-header>
      <a-menu theme="dark" mode="horizontal" :selectedKeys="activePath">
        <a-menu-item v-for="item in options.routes" key="item.path">
          <RouterLink :to="item.path">{{item.label}}</RouterLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="item in activeBreadcrumb">
          {{ item.label }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <div style="background: #fff;padding: 24px;min-height: 780px">
        <RouterView/>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
</style>
