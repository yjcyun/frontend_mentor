import { onMounted, onUnmounted, ref } from "vue";

export default function useWindowSize() {
  const windowWidth = ref(window.innerWidth);

  function onResize() {
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => window.addEventListener("resize", onResize));

  onUnmounted(() => window.removeEventListener("resize", onResize));

  return { windowWidth };
}
