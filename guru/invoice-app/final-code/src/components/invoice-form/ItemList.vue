<template>
  <div class="invoice-items">
    <div class="invoice-items__labels">
      <FormLabel label="Item Name"></FormLabel>
      <FormLabel label="Qty."></FormLabel>
      <FormLabel label="Price"></FormLabel>
      <FormLabel label="Total"></FormLabel>
    </div>
    <div class="invoice-items__item" v-for="item in items" :key="item.itemId">
      <FormInput
        type="text"
        v-model="item.itemName"
        name="itemName"
        :isInvalid="isInvalid"
      />
      <FormInput type="number" min="0" v-model="item.itemQty" name="itemQty" />
      <FormInput
        type="number"
        placeholder="0.00"
        min="0.00"
        v-model="item.itemPrice"
        name="itemPrice"
      />
      <div class="invoice-items__item-total">
        <div class="invoice-items__item-total-total h4">
          {{ calculatedTotal(item.itemQty, item.itemPrice) }}
        </div>
        <button @click="removeItem(item.itemId)">
          <img src="../../assets/icon-delete.svg" alt="Trash can icon" />
        </button>
      </div>
    </div>
    <base-button type="button" mode="btn-6" @click="addNewItem"
      >+ Add New Item</base-button
    >
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    items: { type: Array, default: [] },
    isInvalid: { type: Boolean, default: false },
    "v-model": {},
  },
  methods: {
    addNewItem() {
      const newItem = {
        itemId: uuidv4(),
        itemName: "",
        itemQty: null,
        itemPrice: null,
        itemTotal: "",
      };
      this.items.push(newItem);
    },
    calculatedTotal(qty, price) {
      return qty && price ? (+qty * +price).toFixed(2) : Number(0).toFixed(2);
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

.invoice-items__item {
  display: grid;
  grid-template-columns: 214px 50px 100px 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.invoice-items__item-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.invoice-items__item-total-total {
  color: var(--color-blue-88);
}
</style>
