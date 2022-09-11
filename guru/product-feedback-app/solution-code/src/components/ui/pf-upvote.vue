<script setup>
const props = defineProps({
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
  orientation: {
    type: String,
    default: "vertical",
    validator: function (value) {
      return ["vertical", "horizontal"].indexOf(value) !== -1;
    },
  },
});
console.log(props.orientation);
</script>

<template>
  <div
    class="pf-upvote body3"
    :class="{
      active: active,
      vertical: orientation === 'vertical',
      horizontal: orientation === 'horizontal',
    }"
  >
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
  padding: 14px 0 8px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  width: 40px;

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

  &.horizontal {
    flex-direction: row;
    padding: 11px 12.5px 11px 14px;
    width: 69px;
  }

  &:hover:not(.active) {
    background-color: #cfd7ff;
  }
}
</style>
