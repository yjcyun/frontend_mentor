<template>
  <li>
    <div>{{ id }}</div>
    <date>{{ paymentDue }}</date>
    <div>{{ clientName }}</div>
    <div>{{ total }}</div>
    <div>{{ status }}</div>
  </li>
</template>

<script>
export default {
  props: ["id", "paymentDue", "clientName", "total", "status"],
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
