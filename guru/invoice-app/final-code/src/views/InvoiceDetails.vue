<template>
  <div>
    <invoice-actions :status="invoice.status"></invoice-actions>
  </div>
</template>

<script>
import InvoiceItem from "../components/invoices/InvoiceItem.vue";

import devData from "../../data.json";
import InvoiceActions from "../components/invoice-details/InvoiceActions.vue";

export default {
  components: { InvoiceItem, InvoiceActions },
  data() {
    return {
      invoice: devData.find((inv) => inv.id === this.$route.params.invoiceId),
    };
  },
};
</script>
