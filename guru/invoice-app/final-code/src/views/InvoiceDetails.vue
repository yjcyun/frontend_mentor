<template>
  <div>
    <back-button></back-button>
    <invoice-actions :status="invoice.status"></invoice-actions>
    <invoice-summary
      :id="invoice.id"
      :description="invoice.description"
      :createdAt="invoice.createdAt"
      :paymentDue="invoice.paymentDue"
      :senderAddress="invoice.senderAddress"
      :clientName="invoice.clientName"
      :clientAddress="invoice.clientAddress"
      :clientEmail="invoice.clientEmail"
      :items="invoice.items"
      :total="invoice.total"
    ></invoice-summary>
  </div>
</template>

<script>
import InvoiceItem from "../components/invoices/InvoiceItem.vue";

import devData from "../../data.json";
import InvoiceActions from "../components/invoice-details/InvoiceActions.vue";
import InvoiceSummary from "../components/invoice-details/InvoiceSummary.vue";
import BackButton from "../components/invoice-details/BackButton.vue";

export default {
  components: { InvoiceItem, InvoiceActions, InvoiceSummary, BackButton },
  data() {
    return {
      invoice: devData.find((inv) => inv.id === this.$route.params.invoiceId),
    };
  },
};
</script>
