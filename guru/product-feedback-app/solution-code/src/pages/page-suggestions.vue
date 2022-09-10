<script setup>
import PfSidebar from "../components/pf-sidebar/pf-sidebar.vue";
import PfHeader from "../components/pf-suggestions/pf-header.vue";
import PfSuggestionCardGrid from "../components/pf-suggestions/pf-suggestion-card-grid.vue";
</script>

<template>
  <div class="suggestions-layout">
    <pf-sidebar></pf-sidebar>
    <main class="suggestions-main">
      <pf-header :count="6" />
      <pf-suggestion-card-grid></pf-suggestion-card-grid>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.suggestions-layout {
  display: flex;
  gap: 30px;
}

.suggestions-main {
  width: 100%;
}
</style>
