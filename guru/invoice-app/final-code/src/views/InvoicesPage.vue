<template>
  <div>
    <the-header :numInvoices="invoices.length"></the-header>
    <empty-invoice v-if="invoices.length === 0"></empty-invoice>
    <invoice-list v-else :invoices="invoices"></invoice-list>
  </div>
</template>

<script>
import InvoiceList from "../components/invoices/InvoiceList.vue";
import TheHeader from "../components/header/TheHeader.vue";
import EmptyInvoice from "../components/invoices/EmptyInvoice.vue";

export default {
  components: {
    InvoiceList,
    TheHeader,
    EmptyInvoice,
  },
  methods: {},
  computed: {
    invoices() {
      return this.$store.getters.getInvoices;
    },
  },
};
</script>
