<script setup>
import PfSuggestionCard from "./pf-suggestion-card.vue";
import PfEmpty from "./pf-empty.vue";
</script>

<template>
  <div class="pf-suggestion-card-grid">
    <pf-suggestion-card></pf-suggestion-card>
    <pf-suggestion-card></pf-suggestion-card>
    <!-- <pf-empty></pf-empty> -->
  </div>
</template>

<style lang="scss" scoped>
.pf-suggestion-card-grid {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
