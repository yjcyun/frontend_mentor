<template>
  <div class="filter">
    <button class="filter__button" @click="toggleDropdown">
      <span>Filter by status</span>
      <span class="filter__button--arrow" :class="addRotateClass">
        <img src="../../assets/icon-arrow-down.svg" alt="" />
      </span>
    </button>
    <div class="filter__dropdown" v-if="isOpen">
      <div class="filter__form-control">
        <input type="checkbox" name="" id="draft" />
        <label for="draft" class="h4">Draft</label>
      </div>
      <div class="filter__form-control">
        <input type="checkbox" name="" id="pending" />
        <label for="pending" class="h4">Pending</label>
      </div>
      <div class="filter__form-control">
        <input type="checkbox" name="" id="paid" />
        <label for="paid" class="h4">Paid</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    addRotateClass() {
      return this.isOpen ? "rotate" : "";
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.filter {
  position: relative;
}

.filter__button {
  display: flex;
  gap: 16px;
  align-items: center;
  height: 48px;
}

.filter__dropdown {
  background: var(--color-white);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  padding: 24px;
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 55px;
}

.filter__form-control {
  display: flex;
  gap: 13px;
  cursor: pointer;
}

.filter__form-control label {
  width: 100%;
}

.filter__button--arrow {
  transition: transform 0.2s ease;
}

.filter__button--arrow.rotate {
  transform: rotate(180deg);
}
</style>
