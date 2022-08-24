<template>
  <div class="invoice-items">
    <!-- <div class="invoice-items__labels">
      <FormLabel label="Item Name"></FormLabel>
      <FormLabel label="Qty."></FormLabel>
      <FormLabel label="Price"></FormLabel>
      <FormLabel label="Total"></FormLabel>
    </div> -->
    <SingleItem
      v-for="(item, index) in items"
      :key="item.id || index"
      :index="index"
      :removeItem="removeItem"
      :item="item"
    />
    <base-button type="button" mode="btn-6" @click.prevent="addNewItem"
      >+ Add New Item</base-button
    >
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import SingleItem from "./SingleItem.vue";

export default {
  props: {
    items: { type: Array, default: [] },
    isInvalid: { type: Boolean, default: false },
  },
  components: { SingleItem },
  methods: {
    addNewItem() {
      const newItem = {
        id: uuidv4(),
        name: "",
        quantity: null,
        price: null,
        total: null,
      };
      this.items.push(newItem);
    },
    removeItem(name) {
      const itemIndex = this.items.findIndex((item) => item.name === name);
      this.items.splice(itemIndex, 1);
    },
  },
};
</script>

<style scoped>
.invoice-items__labels {
  display: grid;
  grid-template-columns: 214px 50px 100px 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .invoice-items__labels {
    grid-template-columns: 214px 50px 100px 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
}
</style>
