<template>
  <div>
    <back-button></back-button>
    <invoice-actions
      :status="invoice.status"
      :id="invoice.id"
    ></invoice-actions>
    <invoice-summary
      :id="invoice.id"
      :description="invoice.description"
      :createdAt="invoice.createdAt"
      :paymentDue="invoice.paymentDue"
      :paymentTerms="invoice.paymentTerms"
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
import InvoiceActions from "../components/invoice-details/InvoiceActions.vue";
import InvoiceSummary from "../components/invoice-details/InvoiceSummary.vue";
import BackButton from "../components/invoice-details/BackButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { InvoiceItem, InvoiceActions, InvoiceSummary, BackButton },

  computed: {
    ...mapGetters(["getInvoiceById"]),
    invoice() {
      return this.getInvoiceById(this.$route.params.invoiceId);
    },
  },
};
</script>
