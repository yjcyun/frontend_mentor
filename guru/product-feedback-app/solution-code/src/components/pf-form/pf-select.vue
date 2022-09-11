<script setup>
import { ref } from "vue";

import DownIcon from "../../assets/shared/icon-arrow-down.svg?component";

const props = defineProps({
  options: Object,
});

const isOpened = ref(false);
const selectedItem = ref(props.options[0]);

const toggleDropdown = () => {
  isOpened.value = !isOpened.value;
};

const selectOption = (option) => {
  selectedItem.value = option;
};
</script>

<template>
  <div @click="toggleDropdown" class="pf-select" :class="{ active: isOpened }">
    <span class="selected">{{ selectedItem }}</span>
    <DownIcon />
    <pf-dropdown
      v-if="isOpened"
      :items="options"
      :onClick="selectOption"
      :selectedItem="selectedItem"
    />
  </div>
</template>

<style lang="scss" scoped>
.pf-select {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px 24px;
  background-color: #f7f8fd;
  border-radius: 5px;
  line-height: 20.23px;

  .selected {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }

  svg {
    transition: var(--transition);
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }

  .pf-dropdown {
    width: 100%;
  }
}
</style>
