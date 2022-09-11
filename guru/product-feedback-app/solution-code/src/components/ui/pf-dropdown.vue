<script setup>
import CheckIcon from "../../assets/shared/icon-check.svg?component";

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  onClick: {
    type: Function,
  },
  selectedItem: {
    type: String,
  },
});
</script>

<template>
  <div class="pf-dropdown">
    <ul>
      <li
        v-for="item in items"
        key="item"
        class="pf-dropdown-item body1"
        @click="onClick(item)"
      >
        <p>{{ item }}</p>
        <CheckIcon v-if="selectedItem === item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.pf-dropdown {
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  width: 255px;
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  z-index: 10;
}

.pf-dropdown-item {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-dark-grey);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }

  &:hover {
    color: var(--color-magenta);
  }
}
</style>
