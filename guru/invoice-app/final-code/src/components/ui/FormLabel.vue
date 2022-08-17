<template>
  <label class="body1" :for="labelFor">
    <span class="label__title" :class="isInvalid ? 'error' : ''">{{
      label
    }}</span>
    <span v-if="isInvalid" class="label__error">{{ errorMessage }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "" },
    labelFor: { type: String, default: "" },
    isInvalid: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
  },
};
</script>

<style scoped>
label {
  display: flex;
  justify-content: space-between;
  color: var(--color-blue-7E);
}

label span .error {
  color: var(--color-red-EC);
}

.label__title.error {
  color: var(--color-red-EC);
}

.label__error {
  color: var(--color-red-EC);
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.208333px;
}
</style>
