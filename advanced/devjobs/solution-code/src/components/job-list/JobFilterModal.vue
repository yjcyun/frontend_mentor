<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <slot></slot>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  width: calc(100% - 48px);
  z-index: 100;
  border-radius: 6px;
  border: none;
  padding: 0;
  margin: 0 24px;
  overflow: hidden;
  background-color: var(--card-bg);
}
</style>
