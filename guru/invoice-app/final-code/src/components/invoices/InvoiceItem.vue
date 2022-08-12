<template>
  <li>
    <router-link :to="linkPath">
      <div class="id h4">
        <span class="text-blue-7E">#</span><span>{{ id }}</span>
      </div>
      <div class="dueDate body1">
        <span class="due">Due </span
        ><span class="text-blue-7E">{{ paymentDue }}</span>
      </div>
      <div class="name body1">{{ clientName }}</div>
      <div class="price h3">{{ formatPrice }}</div>

      <invoice-status :status="status"></invoice-status>
      <img src="../../assets/icon-arrow-right.svg" alt="Arrow Right Icon" />
    </router-link>
  </li>
</template>

<script>
import InvoiceStatus from "./InvoiceStatus.vue";

export default {
  components: { InvoiceStatus },
  props: ["id", "paymentDue", "clientName", "total", "status"],
  computed: {
    formatPrice() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(this.total);
    },
    linkPath() {
      return `/${this.id}`;
    },
  },
};
</script>

<style scoped>
a {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-white);
  border-radius: 8px;
  align-items: center;
  padding: 28px 32px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
}

li div {
  flex: 1 1 0;
}

.text-blue-7E {
  color: var(--color-blue-7E);
}

.due {
  color: var(--color-blue-88);
}

.name {
  color: #858bb2;
}

.price {
  text-align: right;
}
</style>
