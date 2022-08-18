<template>
  <form @submit.prevent="submitForm">
    <h2>New Invoice</h2>
    <div class="form__wrapper">
      <!-- Bill From -->
      <fieldset>
        <legend class="form__section-title h4">Bill From</legend>

        <FormInput
          :isInvalid="v$.fromStreetAddress.$error"
          :onBlur="v$.fromStreetAddress.$touch"
          name="fromStreetAddress"
          label="Street Address"
          v-model="fromStreetAddress"
        />
        <div class="form__cols">
          <FormInput
            :isInvalid="v$.fromCity.$error"
            :onBlur="v$.fromCity.$touch"
            name="fromCity"
            label="City"
            v-model="fromCity"
          />
          <FormInput
            :isInvalid="v$.fromPost.$error"
            :onBlur="v$.fromPost.$touch"
            name="fromPost"
            label="Post Code"
            v-model="fromPost"
          />
          <FormInput
            :isInvalid="v$.fromCountry.$error"
            :onBlur="v$.fromCountry.$touch"
            name="fromCountry"
            label="Country"
            v-model="fromCountry"
          />
        </div>
      </fieldset>
      <!-- Bill To -->
      <fieldset>
        <legend class="form__section-title h4">Bill To</legend>

        <FormInput
          :isInvalid="v$.clientName.$error"
          :onBlur="v$.clientName.$touch"
          name="clientName"
          label="Client's Name"
          v-model="clientName"
        />
        <FormInput
          :isInvalid="v$.clientEmail.$error"
          :onBlur="v$.clientEmail.$touch"
          :errorMessage="v$.clientEmail.$errors[0]"
          name="clientEmail"
          label="Client's Email"
          v-model="clientEmail"
          placeholder="e.g. email@example.com"
        />
        <FormInput
          :isInvalid="v$.toStreetAddress.$error"
          :onBlur="v$.toStreetAddress.$touch"
          name="toStreetAddress"
          label="Street Address"
          v-model="toStreetAddress"
        />
        <div class="form__cols">
          <FormInput
            :isInvalid="v$.toCity.$error"
            :onBlur="v$.toCity.$touch"
            name="toCity"
            label="City"
            v-model="toCity"
          />
          <FormInput
            :isInvalid="v$.toPost.$error"
            :onBlur="v$.toPost.$touch"
            name="toPost"
            label="Post Code"
            v-model="toPost"
          />
          <FormInput
            :isInvalid="v$.toCountry.$error"
            :onBlur="v$.toCountry.$touch"
            name="toCountry"
            label="Country"
            v-model="toCountry"
          />
        </div>
        <FormInput
          :isInvalid="v$.toCountry.$error"
          :onBlur="v$.toCountry.$touch"
          name="toCountry"
          label="Country"
          v-model="toCountry"
        />
        <div class="form__cols">
          <FormInput
            :isInvalid="v$.invoiceDate.$error"
            :onBlur="v$.invoiceDate.$touch"
            name="invoiceDate"
            label="Invoice Date"
            v-model="invoiceDate"
            type="date"
          />
          <FormSelect
            name="paymentTerms"
            label="Payment Terms"
            :options="paymentTermsOptions"
            :defaultOption="paymentTermsOptions[2]"
          />
        </div>
        <FormInput
          :isInvalid="v$.description.$error"
          :onBlur="v$.description.$touch"
          name="description"
          label="Description"
          v-model="description"
          placeholder="e.g. Graphic Design Service"
        />
      </fieldset>
      <!-- Item List -->
      <fieldset>
        <legend class="h4 item-list">Item List</legend>
        <ItemList :items="items" ref="itemsRef" />
      </fieldset>
      <div class="form__errors">
        <p v-for="(err, index) in errors" :key="index" class="label__error">
          - {{ err }}
        </p>
      </div>
    </div>
    <form-footer mode="create"></form-footer>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

import ItemList from "./ItemList.vue";
import FormFooter from "./FormFooter.vue";

export default {
  components: { ItemList, FormFooter },
  inject: ["invoices", "addInvoice", "closeForm"],
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      paymentTermsOptions: [
        { value: 1, label: "Net 1 Day" },
        { value: 7, label: "Net 7 Day" },
        { value: 14, label: "Net 14 Day" },
        { value: 30, label: "Net 30 Day" },
      ],
      fromStreetAddress: "dd",
      fromCity: "dd",
      fromPost: "dd",
      fromCountry: "dd",
      clientName: "dd",
      clientEmail: "dd@email.com",
      toStreetAddress: "dd",
      toCity: "dd",
      toPost: "dd",
      toCountry: "dd",
      invoiceDate: "",
      paymentTerms: {},
      description: "dd",
      items: [],
      errors: [],
    };
  },
  computed: {
    getErrorMessages(error) {
      if (error.$propertyPath.includes("item")) {
        this.errors.push("An item must be added");
      }
    },
  },
  methods: {
    async submitForm() {
      const validatedResult = await this.v$.$validate();

      if (!validatedResult) {
        const itemErrorMsg = "An item must be added";
        const fieldErrorMsg = "All fields must be added";

        // Q. How can I make this code better?
        this.v$.$errors.forEach((err) => {
          if (
            err.$propertyPath.includes("item") &&
            this.errors.indexOf(itemErrorMsg) === -1
          ) {
            this.errors.push(itemErrorMsg);
          } else if (
            !err.$propertyPath.includes("item") &&
            this.errors.indexOf(fieldErrorMsg) === -1
          ) {
            this.errors.push(fieldErrorMsg);
          }
        });
      } else {
        this.addInvoice(
          this.fromStreetAddress,
          this.fromCity,
          this.fromPost,
          this.fromCountry,
          this.clientName,
          this.clientEmail,
          this.toStreetAddress,
          this.toCity,
          this.toPost,
          this.toCountry,
          this.invoiceDate,
          this.paymentTerms.value,
          this.description,
          this.items
        );
        this.closeForm();
      }
    },
  },
  validations() {
    return {
      fromStreetAddress: { required },
      fromCity: { required },
      fromPost: { required },
      fromCountry: { required },
      clientName: { required },
      clientEmail: {
        required: helpers.withMessage("can't be empty", required),
        email,
      },
      toStreetAddress: { required },
      toCity: { required },
      toPost: { required },
      toCountry: { required },
      invoiceDate: { required },
      description: { required },
      items: { required },
    };
  },
};
</script>

<style scoped>
form {
  padding: 56px;
  padding-right: 26px;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr 55px;
}

.form__wrapper {
  overflow: auto;
  height: calc(100% - 48px);
  margin-top: 48px;
  padding-right: 13px;
}

.form__cols {
  display: flex;
  width: 100%;
  gap: 24px;
}

.form__section-title {
  color: var(--color-purple-7C);
  margin-bottom: 24px;
}

fieldset {
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

fieldset:last-of-type {
  margin-bottom: 32px;
}

legend.item-list {
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: #777f98;
  margin-bottom: 16px;
}

.form__errors {
  margin-bottom: 13px;
}
</style>
