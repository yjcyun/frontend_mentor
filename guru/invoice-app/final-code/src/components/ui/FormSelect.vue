<template>
  <FormControl>
    <FormLabel :labelFor="name" :label="label" :isInvalid="isInvalid" />
    <div class="select__wrapper">
      <div class="select h4" :class="addVisibleClass" tabindex="0">
        <div class="select__trigger" @click="toggleSelectDropdown">
          <span>{{ selectedOption.label }}</span>
          <div class="arrow" :class="addRotateClass">
            <img src="../../assets/icon-arrow-down.svg" alt="" />
          </div>
        </div>
        <div class="select__options">
          <span
            v-for="option of options"
            :key="option.value"
            :data-value="option.value"
            :class="addSelectedClass(option)"
            @click="selectOption(option)"
            class="select__option"
            >{{ option.label }}</span
          >
        </div>
      </div>
    </div>
  </FormControl>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    options: { type: Array, default: [] },
    defaultOption: { type: Object },
    modelValue: { type: String },
    isInvalid: { type: Boolean, default: false },
    onBlur: { type: Function },
  },
  data() {
    return {
      showOptions: false,
      selectedOption: this.defaultOption,
    };
  },
  methods: {
    toggleSelectDropdown() {
      this.showOptions = !this.showOptions;
    },
    selectOption(el) {
      this.selectedOption = el;
      this.showOptions = false;
      // ! Todo: dynamic nested parent object
      this.$parent.newInvoice[this.name] = el.value;
    },
    closeSelectDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.showOptions = false;
      }
    },
    addSelectedClass(option) {
      return this.selectedOption === option ? "selected" : "";
    },
  },
  computed: {
    addVisibleClass() {
      return this.showOptions ? "visible" : "";
    },
    addRotateClass() {
      return this.showOptions ? "rotate" : "";
    },
  },
  mounted() {
    document.addEventListener("click", this.closeSelectDropdown);

    this.$parent.newInvoice[this.name] = this.defaultOption.value;
  },
};
</script>

<style scoped>
.select__wrapper {
  position: relative;
  user-select: none;
  width: 100%;
}

.select {
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--color-black-0C);
  background: var(--color-white);
  border: 1px solid #dfe3fa;
  border-radius: 4px;
  cursor: pointer;
}

.select:focus {
  border: 1px solid var(--color-purple-7C);
}

.select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
}

.select__options {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background: var(--color-white);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
}

.select.visible .select__options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.select__option {
  position: relative;
  display: block;
  cursor: pointer;
  padding: 15px 24px;
}

.select__option:hover,
.select__option.selected {
  color: var(--color-purple-7C);
}

.arrow {
  transition: transform 0.2s ease;
}

.arrow.rotate {
  transform: rotate(180deg);
}
</style>
