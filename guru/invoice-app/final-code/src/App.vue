<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script>
import TheLayout from "./components/layout/TheLayout.vue";

export default {
  components: {
    TheLayout,
  },
};
</script>
