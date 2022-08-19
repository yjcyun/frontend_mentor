<template>
  <div class="invoice-items__wrapper">
    <FormInput
      type="text"
      v-model="name"
      name="name"
      :isInvalid="v$.name.$error"
      :onBlur="v$.name.$touch"
      @input="updateField($event, 'name')"
    />
    <FormInput
      type="number"
      min="0"
      v-model="quantity"
      name="quantity"
      :isInvalid="v$.quantity.$error"
      :onBlur="v$.quantity.$touch"
      @input="updateField($event, 'quantity')"
    />
    <FormInput
      type="number"
      placeholder="0.00"
      min="0.00"
      step="0.01"
      v-model="price"
      name="price"
      :isInvalid="v$.price.$error"
      :onBlur="v$.price.$touch"
      @input="updateField($event, 'price')"
    />
    <div class="invoice-items__item-total">
      <FormInput
        type="number"
        min="0.00"
        name="total"
        v-model="total"
        disabled
        @input="calculateTotal"
      />
      <button type="button" @click="removeItem(name)">
        <img src="../../assets/icon-delete.svg" alt="Trash can icon" />
      </button>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapGetters } from "vuex";

export default {
  props: ["removeItem", "index", "item"],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      quantity: null,
      price: null,
      total: Number(0).toFixed(2),
    };
  },
  created() {
    if (this.getEditInvoice()) {
      this.name = this.item.name;
      this.quantity = this.item.quantity;
      this.price = this.item.price;
      this.total = Number(this.item.total).toFixed(2);
    }
  },
  computed: {
    calculateTotal() {
      // Calculate total
      this.total =
        this.quantity && this.price
          ? (+this.quantity * +this.price).toFixed(2)
          : Number(0).toFixed(2);

      // Update total
      this.$parent.items[this.index].total = this.total;
    },
  },
  methods: {
    ...mapGetters(["getEditInvoice"]),
    updateField(event, name) {
      this.$parent.items[this.index][name] = event.target.value;
    },
  },
  validations() {
    return {
      name: { required },
      quantity: { required },
      price: { required },
      total: { required },
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
