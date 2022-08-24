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
      <div class="price h3">{{ formattedPrice }}</div>

      <base-status :status="status" class="status"></base-status>
      <img
        src="../../assets/icon-arrow-right.svg"
        alt="Arrow Right Icon"
        class="arrow-right"
      />
    </router-link>
  </li>
</template>

<script>
import BaseStatus from "../ui/BaseStatus.vue";
import formatPrice from "../../utils/format-price.js";

export default {
  components: { BaseStatus },
  props: ["id", "paymentDue", "clientName", "total", "status"],
  computed: {
    formattedPrice() {
      return formatPrice(this.total);
    },
    linkPath() {
      return `/${this.id}`;
    },
  },
};
</script>

<style scoped>
a {
  display: grid;

  grid-template-areas: "id name" "date status" "price status";
  grid-template-rows: 1fr 1fr 1fr;

  padding: 24px;
  align-items: center;
  height: 134px;
}

.text-blue-7E {
  color: var(--color-blue-7E);
}

.id {
  grid-area: id;
}

.dueDate {
  grid-area: date;
  align-self: flex-end;
  padding-bottom: 3px;
}

.due {
  color: var(--color-blue-88);
}

.name {
  text-align: right;
  color: #858bb2;
  grid-area: name;
}

.status {
  justify-self: flex-end;
  align-self: flex-end;
  display: flex;
  grid-area: status;
}

.price {
  text-align: left;
  grid-area: price;
}

.arrow-right {
  display: none;
}

@media (min-width: 768px) {
  a {
    grid-template-columns: 0.8fr 1.2fr 1.2fr 1fr 1fr 20px;
    grid-template-areas: "id date name price status arrow";
    grid-template-rows: 1fr;
    padding: 16px 32px 16px 24px;
    height: auto;
  }

  .name {
    text-align: left;
  }

  .price {
    text-align: right;
    padding-right: 20px;
  }

  .dueDate {
    align-self: center;
    padding-bottom: 0;
  }

  .arrow-right {
    display: flex;
    justify-self: flex-end;
    grid-area: arrow;
  }
}
</style>
