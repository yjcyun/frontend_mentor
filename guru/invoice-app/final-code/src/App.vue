<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script>
import TheLayout from "./components/layout/TheLayout.vue";
import devData from "../data.json";
import { mapGetters } from "vuex";

export default {
  components: {
    TheLayout,
  },
  created() {
    this.$store.dispatch("setInvoices", devData);
  },
  computed: {
    ...mapGetters(["getInvoiceModal"]),
  },
  watch: {
    getInvoiceModal() {
      document.body.classList.toggle("modal");
    },
  },
};
</script>
