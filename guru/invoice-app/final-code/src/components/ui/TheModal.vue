<template>
  <div class="overlay" @click="$emit('onClose')"></div>
  <dialog open>
    <header class="modal__header">
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section class="modal__body">
      <slot name="body">
        <p class="body1">{{ body }}</p>
      </slot>
    </section>
    <menu class="modal__menu">
      <slot name="actions">
        <BaseButton mode="btn-3" @click="$emit('onClose')">Cancel</BaseButton>
        <BaseButton mode="btn-5" @click="$emit('onDelete')">Delete</BaseButton>
      </slot>
    </menu>
  </dialog>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  emits: ["onClose", "onDelete"],
  props: {
    title: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
  },
  methods: {
    onClose() {
      console.log("close modal");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: fit-content;
  z-index: 10;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  overflow: hidden;
  padding: 48px;
}

.modal__header h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
}

.modal__body {
  margin: 13px 0 16px;
}

.modal__body p {
  color: var(--element-5);
}

.modal__menu {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
