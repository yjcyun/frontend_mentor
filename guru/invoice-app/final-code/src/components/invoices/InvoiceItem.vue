<template>
  <li class="box">
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

      <base-status :status="status"></base-status>
      <img src="../../assets/icon-arrow-right.svg" alt="Arrow Right Icon" />
    </router-link>
  </li>
</template>

<script>
import BaseStatus from "../ui/BaseStatus.vue";

export default {
  components: { BaseStatus },
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
  align-items: center;
  padding: 16px 32px 16px 24px;
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
