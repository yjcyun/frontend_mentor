<script setup>
const props = defineProps({
  modelValue: String,
  height: {
    type: String,
    required: false,
    default: "80px",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInputChange = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <textarea
    :value="modelValue"
    @input="onInputChange($event.target.value)"
  ></textarea>
</template>

<style lang="scss" scoped>
textarea {
  height: v-bind(height);
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  background-color: #f7f8fd;
  border-radius: 5px;
  padding: 16px 24px;
  caret-color: var(--color-bright-navy);
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  border: 1px solid transparent;

  &::placeholder {
    color: #8c92b3;
  }

  &:focus {
    border: 1px solid var(--color-blue);
  }
}
</style>
