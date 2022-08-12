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
  padding: 17px 24px;
  border: none;
  border-radius: 24px;
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
  background-color: var(--color-white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-1 {
  display: inline-flex;
  align-items: center;
  padding: 8px 15px 8px 8px;
  gap: 16px;
}

.btn-1,
.btn-2 {
  background-color: var(--color-purple-7C);
  color: var(--color-white);
}

.btn-1:hover,
.btn-2:hover {
  background-color: var(--color-purple-92);
}

.btn-3 {
  background-color: var(--color-white-F9);
  color: var(--color-blue-7E);
}

.btn-3:hover {
  background-color: var(--color-blue-DF);
}

.btn-3.dark {
  background-color: var(--color-navy-25);
  color: var(--color-blue-DF);
}

.btn-3.dark:hover {
  background-color: var(--color-white);
  color: var(--color-blue-DF);
}

.btn-4 {
  background-color: var(--color-navy-37);
  color: var(--color-blue-88);
}

.btn-4:hover {
  background-color: var(--color-black-0C);
}

.btn-4.dark {
  color: var(--color-blue-DF);
}

.btn-4:hover {
  background-color: var(--color-navy-1E);
}

.btn-5 {
  background-color: var(--color-red-EC);
  color: var(--color-white);
}

.btn-5:hover {
  background-color: var(--color-red-FF);
}

.btn-6 {
  background-color: var(--color-white-F9);
  color: var(--color-blue-7E);
  width: 350px;
}

.btn-6:hover {
  background-color: var(--color-blue-DF);
}
</style>
