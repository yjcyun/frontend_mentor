<template>
  <TheLayout>
    <the-header></the-header>
    <invoice-list :invoices="invoices"></invoice-list>
  </TheLayout>
</template>

<script>
import InvoiceList from "./components/invoices/InvoiceList.vue";
import TheHeader from "./components/header/TheHeader.vue";
import devData from "../data.json";
import TheLayout from "./components/layout/TheLayout.vue";

export default {
  components: {
    InvoiceList,
    TheHeader,
    TheLayout,
    TheLayout,
  },
  data() {
    return {
      invoices: devData,
    };
  },
};
</script>
