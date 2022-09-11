<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="pf-status">
    <div class="dot" :class="status.toLowerCase()"></div>
    <p>{{ status }}</p>
  </div>
</template>

<style lang="scss" scoped>
.pf-status {
  display: flex;
  align-items: center;

  .dot {
    width: 8px;
    height: 8px;
    background-color: var(--color-salmon);
    border-radius: 50%;
    margin-right: 16px;

    &.in-progress {
      background-color: var(--color-magenta);
    }

    &.live {
      background-color: var(--color-sky-blue);
    }
  }
}
</style>
