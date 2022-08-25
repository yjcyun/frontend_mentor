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
  color: var(--element-4);
}

label span .error {
  color: var(--helper-danger--primary);
}

.label__title.error {
  color: var(--helper-danger--primary);
}
</style>
