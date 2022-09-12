<script setup>
import { computed } from "vue";
import PfSidebar from "../components/pf-sidebar/pf-sidebar.vue";
import PfHeader from "../components/pf-suggestions/pf-header.vue";
import PfSuggestionCardGrid from "../components/pf-suggestions/pf-suggestion-card-grid.vue";
import store from "../store";

const allFeedback = computed(() => store.getters["feedback/allFeedback"]);
</script>

<template>
  <div class="suggestions-layout">
    <pf-sidebar></pf-sidebar>
    <main class="suggestions-main">
      <pf-header :count="allFeedback.length" />
      <pf-suggestion-card-grid :list="allFeedback" />
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
