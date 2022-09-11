<script setup>
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onInputChange = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <input :value="modelValue" @input="onInputChange($event.target.value)" />
</template>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
  background: #f7f8fd;
  border-radius: 5px;
  padding: 12px 24px;
  caret-color: var(--color-bright-navy);
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  border: 1px solid transparent;
  font-family: var(--font-family);

  &::placeholder {
    color: #8c92b3;
  }

  &:focus {
    border: 1px solid var(--color-blue);
  }
}
</style>
