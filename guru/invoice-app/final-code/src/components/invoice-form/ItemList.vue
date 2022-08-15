<template>
  <div class="invoice-items">
    <div class="invoice-items__labels">
      <base-label label="Item Name"></base-label>
      <base-label label="Qty."></base-label>
      <base-label label="Price"></base-label>
      <base-label label="Total"></base-label>
    </div>
    <div class="invoice-items__item" v-for="item in items" :key="item.itemId">
      <base-input type="text" v-model="item.itemName"></base-input>
      <base-input type="number" v-model="item.itemQty"></base-input>
      <base-input
        type="number"
        placeholder="0.00"
        min="0.01"
        step="0.01"
        v-model="item.itemPrice"
      ></base-input>
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
  data() {
    return {
      items: [],
    };
  },
  computed: {},
  methods: {
    addNewItem() {
      const newItem = {
        itemId: uuidv4(),
        itemName: "",
        itemQty: "",
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
