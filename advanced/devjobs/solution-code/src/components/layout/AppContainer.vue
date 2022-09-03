<template>
  <div class="app-container" :class="{ details: this.detailsPage }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    detailsPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.app-container {
  max-width: var(--max-width);
  margin: auto;
  padding: var(--body-padding);
  margin-top: -40px;
}

.app-container.details {
  max-width: var(--small-max-width);
  margin: auto;
  margin-top: -40px;
}
</style>
