<template>
  <FormControl :class="$attrs.class">
    <FormLabel
      :labelFor="name"
      :label="label"
      :isInvalid="isInvalid"
      :errorMessage="errorMessage.$message"
      v-if="label"
    />
    <input
      :class="isInvalid ? 'error' : ''"
      :id="name"
      :type="type"
      class="h4"
      v-model="value"
      v-bind="$attrs"
      @blur="onBlur"
      @input="onInput"
    />
  </FormControl>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: { type: String, default: "" },
    type: { type: String, default: "text" },
    label: { type: String, default: "" },
    errorMessage: { type: Object, default: { $message: "can't be empty" } },
    modelValue: { type: [String, Number] },
    isInvalid: { type: Boolean, default: false },
    onBlur: { type: Function },
    onInput: { type: Function },
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
  methods: {
    setInputValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  background: var(--text-5);
  color: var(--text-0);
  border: 1px solid var(--element-6);
  border-radius: 4px;
  padding: 16px 20px;
  caret-color: var(--helper-accent--primary);
  width: 100%;
}

input:focus {
  border: 1px solid var(--helper-accent--dimmed);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 35px var(--text-5) inset !important;
  -webkit-text-fill-color: var(--text-0) !important;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input::placeholder {
  color: var(--text-5);
  opacity: 0.4;
}

input:disabled {
  border: none;
  padding: 16px 0;
  background-color: transparent;
  color: var(--element-5);
}

input.error {
  border: 1px solid var(--helper-danger--primary);
}
</style>
