<template>
  <div>
    <invoice-item
      :id="invoice.id"
      :paymentDue="invoice.paymentDue"
      :clientName="invoice.clientName"
      :total="invoice.total"
      :status="invoice.status"
    ></invoice-item>
  </div>
</template>

<script>
import InvoiceItem from "../components/invoices/InvoiceItem.vue";

import devData from "../../data.json";

export default {
  components: { InvoiceItem },
  data() {
    return {
      invoice: devData.find((inv) => inv.id === this.$route.params.invoiceId),
    };
  },
};
</script>
