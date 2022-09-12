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
        :text="category"
        :key="category"
        :active="false"
      />
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-categories {
  padding: 24px;
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
