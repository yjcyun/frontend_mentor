<script setup>
import SuggestionIcon from "../../assets/suggestions/icon-suggestions.svg?component";
import PlusIcon from "../../assets/shared/icon-plus.svg?component";
import PfSortSelect from "./pf-sort-select.vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <header>
    <SuggestionIcon />
    <h3 class="pf-header--suggestions">{{ count }} Suggestions</h3>
    <pf-sort-select></pf-sort-select>
    <pf-button>
      <template #icon><PlusIcon /></template>
      Add Feedback
    </pf-button>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #373f68;
  color: var(--color-white);
  padding: 0 16px 0 24px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;

  .pf-header--suggestions {
    margin: 0 38px 0 16px;
  }

  button {
    margin-left: auto;
  }
}
</style>
