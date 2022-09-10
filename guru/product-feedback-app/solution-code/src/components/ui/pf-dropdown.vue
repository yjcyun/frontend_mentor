<script setup>
import CheckIcon from "../../assets/shared/icon-check.svg?component";

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="pf-dropdown">
    <ul>
      <li v-for="item in items" key="item.label" class="pf-dropdown-item body1">
        <p>{{ item.label }}</p>
        <CheckIcon v-if="item.selected" />
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
}

.pf-dropdown-item {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }

  &:hover {
    color: var(--color-magenta);
  }
}
</style>
