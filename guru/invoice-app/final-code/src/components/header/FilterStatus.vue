<template>
  <div class="filter">
    <button
      class="filter__button"
      ref="ref_dropdown_button"
      @click="showDropdown = !showDropdown"
    >
      <span class="h4">{{ label }}</span>
      <span class="filter__button--arrow" :class="addRotateClass">
        <img src="../../assets/icon-arrow-down.svg" alt="" />
      </span>
    </button>
    <div class="filter__dropdown" ref="ref_dropdown" v-show="showDropdown">
      <label :for="key" class="h4" v-for="key in Object.keys(options)">
        <input type="checkbox" :name="key" :id="key" v-model="options[key]" />
        <div class="filter__checkbox"></div>
        {{ key }}
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    label: { type: String },
  },
  data() {
    return {
      showDropdown: false,
      options: {
        draft: false,
        pending: false,
        paid: false,
      },
    };
  },
  computed: {
    addRotateClass() {
      return this.showDropdown ? "rotate" : "";
    },
  },
  methods: {
    ...mapActions(["updateFilter"]),
    onClose() {
      this.showDropdown = false;
    },
  },
  watch: {
    options: {
      immediate: true,
      handler(option) {
        this.updateFilter(option);
      },
    },
  },
  created() {
    document.addEventListener("click", (e) => {
      const filterOptions = this.$refs.ref_dropdown;
      const filter = this.$refs.ref_dropdown_button;

      if (filter) {
        if (
          this.showDropdown &&
          !filter.contains(e.target) &&
          !filterOptions.contains(e.target)
        ) {
          this.onClose();
        }
      }
    });
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

label {
  display: flex;
  gap: 13px;
  cursor: pointer;
  position: relative;
  width: 100%;
  text-transform: capitalize;
}

.filter__button--arrow {
  transition: transform 0.2s ease;
}

.filter__button--arrow.rotate {
  transform: rotate(180deg);
}

input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.filter__checkbox {
  background-color: #dfe3fa;
  border-radius: 2px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: -2px;
}

input:checked ~ .filter__checkbox {
  background-color: var(--color-purple-7C);
}

input:checked ~ .filter__checkbox::after {
  left: 6px;
  top: 0;
  width: 3px;
  height: 8px;
  border: solid var(--color-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  box-sizing: unset;
  content: "";
  position: absolute;
  display: block;
}
</style>
