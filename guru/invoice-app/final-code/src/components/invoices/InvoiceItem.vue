<template>
  <li>
    <div>{{ id }}</div>
    <div>{{ paymentDue }}</div>
    <div>{{ clientName }}</div>
    <div>{{ total }}</div>
    <div>{{ status }}</div>
    <invoice-status :status="status"></invoice-status>
  </li>
</template>

<script>
import InvoiceStatus from "./InvoiceStatus.vue";

export default {
  components: { InvoiceStatus },
  props: ["id", "paymentDue", "clientName", "total", "status"],
};
</script>

<style scoped></style>
