<template>
  <div class="input-wrapper">
    <span class="input-wrapper--icon">
      <img :src="icon" alt="" />
    </span>
    <input v-model="value" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
  height: 100%;
  width: 100%;
}

.input-wrapper input {
  border: none;
  background-color: transparent;
  color: var(--input-text);
  outline: none;
  caret-color: var(--color-violet);
  width: 100%;
  padding-right: 24px;
}

.input-wrapper input::placeholder {
  color: var(--input-placeholder);
}

/* .input-wrapper .input-wrapper--icon {
  display: none;
} */

@media (min-width: 768px) {
  .input-wrapper {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  .input-wrapper .input-wrapper--icon {
    display: block;
  }
}
</style>
