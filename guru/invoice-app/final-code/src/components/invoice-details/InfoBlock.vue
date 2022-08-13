<template>
  <div class="info">
    <p class="info__label body1">{{ label }}</p>
    <p class="info__body">{{ body }}</p>
    <p class="info__sub-body body2" v-if="subBody">{{ subBody }}</p>
  </div>
</template>

<script>
export default {
  props: ["label", "body", "subBody"],
};
</script>

<style scoped>
.info {
  width: max-content;
}

.info__label {
  color: var(--color-blue-7E);
  margin-bottom: 12px;
}

.info__body {
  color: var(--color-black-0C);
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
}

.info__sub-body {
  color: var(--color-blue-7E);
  margin-top: 8px;
  max-width: 100px;
}
</style>
