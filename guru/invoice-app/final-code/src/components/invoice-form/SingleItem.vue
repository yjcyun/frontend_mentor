<template>
  <div class="invoice-items__wrapper">
    <FormInput
      type="text"
      v-model="itemName"
      name="itemName"
      :isInvalid="v$.itemName.$error"
      :onBlur="v$.itemName.$touch"
      @input="updateField($event, 'itemName')"
    />
    <FormInput
      type="number"
      min="0"
      v-model="itemQty"
      name="itemQty"
      :isInvalid="v$.itemQty.$error"
      :onBlur="v$.itemQty.$touch"
      @input="updateField($event, 'itemQty')"
    />
    <FormInput
      type="number"
      placeholder="0.00"
      min="0.00"
      v-model="itemPrice"
      name="itemPrice"
      :isInvalid="v$.itemPrice.$error"
      :onBlur="v$.itemPrice.$touch"
      @input="updateField($event, 'itemPrice')"
    />
    <div class="invoice-items__item-total">
      <FormInput
        type="number"
        min="0.00"
        name="itemTotal"
        v-model="itemTotal"
        disabled
        @input="calculateTotal"
      />
      <button type="button" @click="removeItem(itemId)">
        <img src="../../assets/icon-delete.svg" alt="Trash can icon" />
      </button>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  props: ["removeItem", "index", "itemId"],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      itemName: "",
      itemQty: null,
      itemPrice: null,
      itemTotal: Number(0).toFixed(2),
    };
  },
  computed: {
    calculateTotal() {
      // Calculate itemTotal
      this.itemTotal =
        this.itemQty && this.itemPrice
          ? (+this.itemQty * +this.itemPrice).toFixed(2)
          : Number(0).toFixed(2);

      // Update itemTotal
      this.$parent.items[this.index].itemTotal = this.itemTotal;
    },
  },
  methods: {
    updateField(event, name) {
      this.$parent.items[this.index][name] = event.target.value;
    },
  },
  validations() {
    return {
      itemName: { required },
      itemQty: { required },
      itemPrice: { required },
      itemTotal: { required },
    };
  },
};
</script>

<style scoped>
.invoice-items__wrapper {
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
