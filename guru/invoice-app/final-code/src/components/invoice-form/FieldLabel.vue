<template>
  <label class="body1">{{ label }}</label>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style scoped>
label {
  color: var(--color-blue-7E);
}
</style>
