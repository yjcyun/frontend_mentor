<template>
  <TheLayout>
    <the-header :numInvoices="invoices.length"></the-header>
    <empty-invoice v-if="invoices.length === 0"></empty-invoice>
    <invoice-list :invoices="invoices" v-else></invoice-list>
  </TheLayout>
</template>

<script>
import InvoiceList from "./components/invoices/InvoiceList.vue";
import TheHeader from "./components/header/TheHeader.vue";
import TheLayout from "./components/layout/TheLayout.vue";
import EmptyInvoice from "./components/invoices/EmptyInvoice.vue";
import devData from "../data.json";

export default {
  components: {
    InvoiceList,
    TheHeader,
    TheLayout,
    TheLayout,
    EmptyInvoice,
  },
  data() {
    return {
      invoices: devData,
    };
  },
};
</script>
