<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="pf-chip body3" :class="{ active: active }">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.pf-chip {
  background-color: var(--color-blue-gray);
  color: var(--color-blue);
  border-radius: var(--border-radius);
  padding: 5px 16px;
  display: inline;
  cursor: pointer;

  &.active {
    background-color: var(--color-blue);
    color: var(--color-white);
  }

  &:hover:not(.active) {
    background-color: #cfd7ff;
  }
}
</style>
