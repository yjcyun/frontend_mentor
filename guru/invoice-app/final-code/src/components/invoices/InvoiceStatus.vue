<template>
  <div class="status-wrapper" :class="status">
    <span class="circle"></span>
    <span class="h4">{{ status }}</span>
  </div>
</template>

<script>
export default {
  props: ["status"],
};
</script>

<style scoped>
.status-wrapper {
  display: inline-flex;
  padding: 13px 30px;
  border-radius: 6px;
  text-transform: capitalize;
  align-items: center;
  gap: 8px;
}

.paid {
  background-color: var(--color-green-06);
  color: var(--color-green);
}

.pending {
  background-color: var(--color-orange-06);
  color: var(--color-orange);
}

.draft {
  background-color: var(--color-navy-37-06);
  color: var(--color-navy-37);
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.paid .circle {
  background-color: var(--color-green);
}

.pending .circle {
  background-color: var(--color-orange);
}

.draft .circle {
  background-color: var(--color-navy-37);
}
</style>
