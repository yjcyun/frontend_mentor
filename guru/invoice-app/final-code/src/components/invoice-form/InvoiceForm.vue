<template>
  <form @submit.prevent="addInvoice">
    <h2>New Invoice</h2>
    <div class="form__wrapper">
      <!-- Bill From -->
      <fieldset>
        <legend class="form__section-title h4">Bill From</legend>
        <div class="form__form-control">
          <field-label for="senderStreetAddress" label="Street Address" />
          <input-field
            type="text"
            id="senderStreetAddress"
            v-model="senderStreetAddress"
          />
        </div>
        <!-- <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="senderCity" label="City" />
            <input-field type="text" id="senderCity" />
          </div>
          <div class="form__form-control">
            <field-label for="senderPostal" label="Post Code" />
            <input-field type="text" id="senderPostal" />
          </div>
          <div class="form__form-control">
            <field-label for="senderCountry" label="Country" />
            <input-field type="text" id="senderCountry" />
          </div>
        </div> -->
      </fieldset>
      <!-- Bill To -->
      <!-- <fieldset>
        <legend class="form__section-title h4">Bill To</legend>

        <div class="form__form-control">
          <field-label for="clientName" label="Client's Name" />
          <input-field type="text" id="clientName" />
        </div>
        <div class="form__form-control">
          <field-label for="clientEmail" label="Client's Email" />
          <input-field type="text" id="clientEmail" />
        </div>
        <div class="form__form-control">
          <field-label for="clientStreetAddress" label="Street Address" />
          <input-field type="text" id="clientStreetAddress" />
        </div>
        <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="clientCity" label="City" />
            <input-field type="text" id="clientCity" />
          </div>
          <div class="form__form-control">
            <field-label for="clientPostal" label="Post Code" />
            <input-field type="text" id="clientPostal" />
          </div>
          <div class="form__form-control">
            <field-label for="clientCountry" label="Country" />
            <input-field type="text" id="clientCountry" />
          </div>
        </div>
        <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="invoiceDate" label="Invoice Date" />
            <input-field type="date" id="invoiceDate" />
          </div>
          <div class="form__form-control">
            <field-label for="paymentTerms" label="Payment Terms" />
            <select-field :options="paymentTermsOptions"></select-field>
          </div>
        </div>
        <div class="form__form-control">
          <field-label for="description" label="Project Description" />
          <input type="text" id="description" />
        </div>
      </fieldset> -->
      <!-- Item List -->
      <!-- <fieldset>
        <legend class="h4">Item List</legend>
      </fieldset> -->
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script>
import InputField from "./InputField.vue";
import FieldLabel from "./FieldLabel.vue";
import SelectField from "./SelectField.vue";
export default {
  components: { InputField, FieldLabel, SelectField },
  data() {
    return {
      paymentTermsOptions: [
        { value: 1, label: "Net 1 Day" },
        { value: 7, label: "Net 7 Day" },
        { value: 14, label: "Net 14 Day" },
        { value: 30, label: "Net 30 Day" },
      ],
      senderStreetAddress: "",
    };
  },
  methods: {
    addInvoice() {
      console.log("senderStreetAddress:", this.senderStreetAddress);
    },
  },
};
</script>

<style scoped>
form {
  padding: 56px;
  padding-right: 32px;
  height: 100vh;
}

.form__wrapper {
  overflow: auto;
  height: 100%;
  margin-top: 48px;
  padding-right: 26px;
}

.form__col-group {
  display: flex;
  width: 100%;
  gap: 24px;
}

.form__section-title {
  color: var(--color-purple-7C);
  margin-bottom: 24px;
}

.form__form-control {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

fieldset {
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
