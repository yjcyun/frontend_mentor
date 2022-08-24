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
  color: var(--color-black-0C);
  background: var(--color-white);
  border: 1px solid #dfe3fa;
  border-radius: 4px;
  padding: 16px 20px;
  caret-color: var(--color-purple-7C);
  width: 100%;
}

input:focus {
  border: 1px solid var(--color-purple-92);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input::placeholder {
  color: var(--color-black-0C);
  opacity: 0.4;
}

input:disabled {
  border: none;
  padding: 16px 0;
  background-color: transparent;
  color: var(--color-blue-88);
}

input.error {
  border: 1px solid var(--color-red-EC);
}
</style>
