<template>
  <TheHeader />
  <AppContainer>
    <router-view></router-view>
  </AppContainer>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

import TheHeader from "./components/layout/TheHeader.vue";
import AppContainer from "./components/layout/AppContainer.vue";

import data from "./data.json";

const store = useStore();

onMounted(function () {
  document.documentElement.setAttribute("data-color-theme", "dark");

  store.dispatch("setJobs", data);
});
</script>

<style></style>
