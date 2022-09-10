<script setup>
const props = defineProps({
  votes: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="pf-upvote body3" :class="{ active: active }">
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6l4-4 4 4"
        stroke="#4661E6"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
    <span>{{ votes }}</span>
  </div>
</template>

<style lang="scss" scoped>
.pf-upvote {
  background-color: var(--color-blue-gray);
  border-radius: var(--border-radius);
  padding: 14px 11px 8px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  span {
    font-weight: 700;
    color: var(--color-bright-navy);
  }

  &.active {
    background-color: var(--color-blue);

    svg path {
      stroke: var(--color-white);
    }

    span {
      color: var(--color-white);
    }
  }

  &:hover:not(.active) {
    background-color: #cfd7ff;
  }
}
</style>
