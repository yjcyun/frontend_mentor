<template>
  <button type="button" :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from "vue";

type Mode = "primary" | "secondary";

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: "primary",
      validator: function (value: Mode) {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        btn: true,
        "btn--primary": props.mode === "primary",
        "btn--secondary": props.mode === "secondary",
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>

<style scoped>
.btn {
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 16px 0;
  transition: var(--transition);
  width: 100%;
  max-width: 141px;
}

.btn.btn--primary {
  background-color: var(--color-violet);
  color: var(--color-white);
}

.btn.btn--primary:hover {
  background-color: var(--color-light-violet);
}

.btn.btn--secondary {
  background-color: var(--color-violet--dimmed-1);
  color: var(--btn-text);
}

.btn.btn--secondary:hover {
  background-color: var(--color-violet--dimmed-35);
  color: var(--btn-text);
}
</style>
