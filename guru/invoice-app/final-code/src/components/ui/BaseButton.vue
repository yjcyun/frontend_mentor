<template>
  <button :class="mode">
    <div class="plus-icon-container" v-if="showPlusIcon">
      <img src="../../assets/icon-plus.svg" alt="Plus Icon" />
    </div>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: ["mode"],
  computed: {
    showPlusIcon() {
      return this.mode === "btn-1";
    },
  },
};
</script>

<style scoped>
button {
  padding: 16px 24px;
  border: none;
  border-radius: 5rem;
  font-family: var(--font-family);
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  transition: all 0.2s ease;
}

.plus-icon-container {
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-1 {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px 6px 6px;
  gap: 8px;
}

.btn-1,
.btn-2 {
  background-color: var(--helper-accent--primary);
  color: #ffffff;
}

.btn-1:hover,
.btn-2:hover {
  background-color: var(--helper-accent--dimmed);
}

.btn-3 {
  background-color: var(--element-8);
  color: var(--element-4);
}

.btn-3:hover {
  background-color: var(--element-6);
}

.dark-theme .btn-3 {
  background-color: #252945;
  color: #dfe3fa;
}

.dark-theme .btn-3:hover {
  background-color: #ffffff;
  color: #7e88c3;
}

.btn-4 {
  background-color: #373b53;
  color: var(--element-5);
}

.btn-4:hover {
  background-color: #1e2139;
}

.dark-theme .btn-4:hover {
  background-color: #252945;
}

.btn-5 {
  background-color: var(--helper-danger--primary);
  color: #ffffff;
}

.btn-5:hover {
  background-color: var(--helper-danger--dimmed);
}

.btn-6 {
  background-color: var(--element-8);
  color: var(--element-4);
  width: 100%;
}

.btn-6:hover {
  background-color: var(--element-6);
}

@media (min-width: 768px) {
  button {
    padding: 17px 24px;
  }
  .btn-1 {
    padding: 8px 15px 8px 8px;
    gap: 16px;
  }
}
</style>
