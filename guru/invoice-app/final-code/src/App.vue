<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script>
import TheLayout from "./components/layout/TheLayout.vue";
import devData from "../data.json";

export default {
  components: {
    TheLayout,
  },
  created() {
    this.$store.dispatch("setInvoices", devData);
  },
};
</script>
