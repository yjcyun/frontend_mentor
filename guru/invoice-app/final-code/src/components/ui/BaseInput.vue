<template>
  <input class="h4" v-model="value" @blur="onBlur($event)" />
</template>

<script>
export default {
  props: ["modelValue"],
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
    onBlur(e) {
      const enteredValue = e.target.value;
      if (enteredValue === "") {
        console.log("hasError");
      }
    },
    setInputValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
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
</style>
