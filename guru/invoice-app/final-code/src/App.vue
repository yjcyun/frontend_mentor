<template>
  <invoice-list :invoices="invoices"></invoice-list>
  <base-button mode="btn-1">Hello</base-button>
</template>

<script>
import InvoiceList from "./components/invoices/InvoiceList.vue";
import devData from "../data.json";

export default {
  components: { InvoiceList },
  data() {
    return {
      invoices: devData,
    };
  },
};
</script>
