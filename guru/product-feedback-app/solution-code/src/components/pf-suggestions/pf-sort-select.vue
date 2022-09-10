<script setup>
import { computed, ref } from "vue";

const options = ref([
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
]);
const isOpened = ref(false);
const selectedItem = ref(options.value[0]);

const toggleDropdown = () => {
  isOpened.value = !isOpened.value;
};

const selectOption = (option) => {
  selectedItem.value = option;
};
</script>

<template>
  <label @click="toggleDropdown" :class="{ active: isOpened }"
    >Sort by :
    <div>
      <span class="pf-sort--selected">{{ selectedItem }}</span>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4 4-4"
          stroke="#fff"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <pf-dropdown
      v-if="isOpened"
      :items="options"
      :onClick="selectOption"
      :selectedItem="selectedItem"
    />
  </label>
</template>

<style lang="scss" scoped>
label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 26px 17.5px;
  background-color: #373f68;
  border-radius: var(--border-radius);
  color: var(--color-white);
  line-height: 20.23px;

  .pf-sort--selected {
    margin-right: 9px;
    margin-left: 5px;
    font-weight: 700;
  }

  svg {
    transition: var(--transition);
  }

  &.active {
    color: rgba(242, 244, 254, 0.75);

    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
