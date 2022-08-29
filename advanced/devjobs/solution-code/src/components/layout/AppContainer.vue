<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-container {
  max-width: var(--max-width);
  margin: auto;
  padding: var(--body-padding);
}
</style>
