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
  padding: 13px 0;
  border-radius: 6px;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 104px;
}

.paid {
  background-color: var(--helper-success--dimmed);
  color: var(--helper-success);
}

.pending {
  background-color: var(--helper-warning--dimmed);
  color: var(--helper-warning);
}

.draft {
  background-color: var(--element-3--dimmed);
  color: var(--element-3);
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.paid .circle {
  background-color: var(--helper-success);
}

.pending .circle {
  background-color: var(--helper-warning);
}

.draft .circle {
  background-color: var(--element-3);
}
</style>
