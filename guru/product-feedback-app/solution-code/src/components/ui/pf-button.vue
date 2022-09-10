<script setup>
import { computed, reactive } from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "primary",
    validator: function (value) {
      return (
        ["primary", "secondary", "tertiary", "error", "text"].indexOf(value) !==
        -1
      );
    },
  },
});

const propRef = reactive(props);
const classes = computed(function () {
  return {
    btn: true,
    h4: true,
    "btn--primary": propRef.mode === "primary",
    "btn--secondary": propRef.mode === "secondary",
    "btn--tertiary": propRef.mode === "tertiary",
    "btn--error": propRef.mode === "error",
    "btn--text": propRef.mode === "text",
  };
});
</script>

<template>
  <button :class="classes">
    <slot name="icon"></slot>
    <span><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
button.btn {
  border: none;
  background-color: transparent;
  font-family: var(--font-family);
  padding: 13px 24px 11px;
  border-radius: var(--border-radius);
  color: var(--color-blue-gray);
  letter-spacing: 0;
  cursor: pointer;
  transition: var(--transition);

  &.btn--primary {
    background-color: var(--color-magenta);

    &:hover {
      background-color: var(--color-magenta-dimmed);
    }
  }

  &.btn--secondary {
    background-color: var(--color-blue);

    &:hover {
      background-color: var(--color-blue-dimmed);
    }
  }

  &.btn--tertiary {
    background-color: var(--color-bright-navy);

    &:hover {
      background-color: var(--color-bright-navy-dimmed);
    }
  }

  &.btn--error {
    background-color: var(--color-red);

    &:hover {
      background-color: var(--color-red-dimmed);
    }
  }

  &.btn--text {
    color: var(--color-dark-grey);
    span {
      padding-left: 15px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
