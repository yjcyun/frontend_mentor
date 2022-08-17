<template>
  <div class="form__form-control">
    <slot></slot>
  </div>
</template>

<style scoped>
.form__form-control {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
