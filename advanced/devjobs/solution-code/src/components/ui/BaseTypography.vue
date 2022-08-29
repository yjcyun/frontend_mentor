<template>
  <component :is="$props.as" :class="classes" :style="$props.style">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    as: {
      type: String as PropType<"h1" | "h2" | "h3" | "h4" | "p">,
      default: "p",
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    class: {
      type: String as PropType<
        | "text-h1"
        | "text-h2"
        | "text-h3"
        | "text-h4"
        | "text-body"
        | "text-body-2"
      >,
      default: "",
    },
  },
  setup(props) {
    const classes = computed(() => props.class);
    return { classes };
  },
});
</script>

<style>
h1,
h2,
h3,
h4,
.text-h1,
.text-h2,
.text-h3,
.text-h4 {
  font-weight: 700;
}

h1,
.text-h1 {
  font-size: 28px;
  line-height: 35px;
}

h2,
.text-h2 {
  font-size: 24px;
  line-height: 30px;
}

h3,
.text-h3 {
  font-size: 20px;
  line-height: 25px;
}

h4,
.text-h4 {
  font-size: 14px;
  line-height: 17px;
}

p,
.text-body {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.text-body-2 {
  line-height: 26px;
}
</style>
