<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

import TheHeader from "@/components/layout/TheHeader.vue";

import data from "./data.json";

const store = useStore();

onMounted(function () {
  store.dispatch("setJobs", data);
  store.dispatch("setFilteredJobs", { data, count: 12 });
});
</script>

<style></style>
