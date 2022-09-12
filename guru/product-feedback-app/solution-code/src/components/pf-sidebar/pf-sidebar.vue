<script setup>
import { computed } from "vue";

import PfLogo from "./pf-logo.vue";
import PfCategories from "./pf-categories.vue";
import PfRoadmap from "./pf-roadmap.vue";
import store from "../../store";

const storeCategories = computed(() => store.getters["feedback/allCategories"]);

const allCategories = ["all", ...storeCategories.value].map((item) => {
  if (item === "ui" || item === "ux") {
    return item.toUpperCase();
  }
  return item[0].toUpperCase() + item.slice(1);
});
</script>

<template>
  <aside>
    <pf-logo />
    <pf-categories :categories="allCategories" />
    <pf-roadmap
      :status="[
        { label: 'Planned', count: 2 },
        { label: 'In-Progress', count: 3 },
        { label: 'Live', count: 1 },
      ]"
    />
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-shrink: 0;
}
</style>
