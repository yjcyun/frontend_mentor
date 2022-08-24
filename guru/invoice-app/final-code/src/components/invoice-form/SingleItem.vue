<template>
  <div class="invoice-items__wrapper">
    <FormInput
      type="text"
      v-model="name"
      name="name"
      label="Item Name"
      class="name"
      :isInvalid="v$.name.$error"
      :onBlur="v$.name.$touch"
      @input="updateField($event, 'name')"
    />
    <FormInput
      type="number"
      min="0"
      v-model="quantity"
      name="quantity"
      label="Qty."
      class="qty"
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
      label="Price"
      class="price"
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
        label="Total"
        disabled
        @input="calculateTotal"
      />
      <button
        type="button"
        class="invoice-items__item-remove"
        @click="removeItem(name)"
      >
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

<style>
.invoice-items__wrapper {
  display: grid;
  grid-template-columns: 4rem repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}

.invoice-items__wrapper label .label__error {
  display: none;
}

.invoice-items__wrapper .form__form-control.name {
  grid-column: 1 / -1;
}

.invoice-items__wrapper .form__form-control.price {
  grid-column: 2 / span 2;
}

.invoice-items__item-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2;
}

.invoice-items__item-total-total {
  color: var(--color-blue-88);
}

.invoice-items__item-remove {
  padding-bottom: 16px;
  align-self: flex-end;
}

@media (min-width: 640px) {
  .invoice-items__wrapper {
    grid-template-columns: 214px 50px 100px 1fr;
    margin-bottom: 16px;
  }

  .invoice-items__wrapper:not(:first-of-type) label {
    display: none;
  }

  .invoice-items__wrapper .form__form-control.name,
  .invoice-items__wrapper .form__form-control.price,
  .invoice-items__item-total {
    grid-column: auto;
  }
}
</style>
