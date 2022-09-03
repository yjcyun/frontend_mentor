<template>
  <label>
    <input type="checkbox" v-model="value" />
    <div class="checkbox"></div>
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
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
label {
  display: flex;
  gap: 16px;
  cursor: pointer;
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--input-text);
  white-space: nowrap;
}

input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox {
  background-color: var(--input-checkbox);
  border-radius: 3px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: -2px;
}

input:checked ~ .checkbox {
  background-color: var(--color-violet);
}

input:checked ~ .checkbox::after {
  left: 9px;
  top: 1px;
  width: 4px;
  height: 12px;
  border: solid var(--color-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  box-sizing: unset;
  content: "";
  position: absolute;
  display: block;
}

input[type="checkbox"]:focus ~ .checkbox {
  outline: var(--color-violet) solid 1px;
  box-shadow: 0 0px 8px var(--color-violet);
}
</style>
