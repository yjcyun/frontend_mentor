<script setup>
const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <pf-card>
    <div class="pf-categories">
      <pf-chip
        v-for="category in categories"
        :text="category.label"
        :key="category.label"
        :active="category.active"
      />
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-categories {
  padding: 24px;
  display: inline-flex;
  gap: 8px;
}
</style>
