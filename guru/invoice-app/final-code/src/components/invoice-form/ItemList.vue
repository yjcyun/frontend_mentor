<template>
  <div class="invoice-items">
    <div class="invoice-items__labels">
      <FormLabel label="Item Name"></FormLabel>
      <FormLabel label="Qty."></FormLabel>
      <FormLabel label="Price"></FormLabel>
      <FormLabel label="Total"></FormLabel>
    </div>
    <SingleItem
      v-for="(item, index) in items"
      :key="item.itemId"
      :itemId="item.itemId"
      :index="index"
      :ref="item.itemId"
      :removeItem="removeItem"
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
        itemId: uuidv4(),
        itemName: "",
        itemQty: null,
        itemPrice: null,
        itemTotal: 0,
      };
      this.items.push(newItem);
    },
    removeItem(itemId) {
      const itemIndex = this.items.findIndex((item) => item.itemId === itemId);
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
</style>
