<template>
  <ul>
    <invoice-item
      v-for="inv in invoices"
      :key="inv.id"
      :id="inv.id"
      :paymentDue="inv.paymentDue"
      :clientName="inv.clientName"
      :total="inv.total"
      :status="inv.status"
    ></invoice-item>
  </ul>
</template>

<script>
import InvoiceItem from "./InvoiceItem.vue";

export default {
  components: { InvoiceItem },
  props: ["invoices"],
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
