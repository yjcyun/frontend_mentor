<script setup>
import PfSuggestionCard from "./pf-suggestion-card.vue";
import PfEmpty from "./pf-empty.vue";
import { computed } from "vue";

const props = defineProps({
  list: Object,
});
</script>

<template>
  <div class="pf-suggestion-card-grid">
    <pf-empty v-if="list.length === 0"></pf-empty>
    <pf-suggestion-card
      v-else
      v-for="item of list"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :category="item.category"
      :upvotes="item.upvotes"
      :numOfComments="item.comments?.length || 0"
    />
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
