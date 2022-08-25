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
import { mapGetters } from "vuex";

export default {
  components: {
    InvoiceList,
    TheHeader,
    EmptyInvoice,
  },
  methods: {},
  computed: {
    ...mapGetters(["getInvoices", "getInvoicesByFilter"]),

    invoices() {
      return this.getInvoicesByFilter;
    },
  },
};
</script>
