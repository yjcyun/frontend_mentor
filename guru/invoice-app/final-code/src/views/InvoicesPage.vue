<template>
  <div>
    <the-header :numInvoices="invoices.length"></the-header>
    <empty-invoice v-if="invoices.length === 0"></empty-invoice>
    <invoice-list :invoices="invoices" v-else></invoice-list>
  </div>
</template>

<script>
import InvoiceList from "../components/invoices/InvoiceList.vue";
import TheHeader from "../components/header/TheHeader.vue";
import EmptyInvoice from "../components/invoices/EmptyInvoice.vue";
import devData from "../../data.json";

export default {
  components: {
    InvoiceList,
    TheHeader,
    EmptyInvoice,
  },
  provide() {
    return { invoices: this.invoices };
  },
  data() {
    return {
      invoices: devData,
    };
  },
};
</script>
