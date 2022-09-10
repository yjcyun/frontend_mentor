<script setup>
import PfLogo from "./pf-logo.vue";
import PfCategories from "./pf-categories.vue";
import PfRoadmap from "./pf-roadmap.vue";
</script>

<template>
  <aside>
    <pf-logo />
    <pf-categories
      :categories="[{ label: 'All', active: true }, { label: 'UI' }]"
    />
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
