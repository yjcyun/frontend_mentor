<template>
  <form @submit.prevent="addInvoice">
    <h2>New Invoice</h2>
    <div class="form__wrapper">
      <!-- Bill From -->
      <fieldset>
        <legend class="form__section-title h4">Bill From</legend>
        <div class="form__form-control">
          <base-label for="senderStreetAddress" label="Street Address" />
          <base-input
            type="text"
            id="senderStreetAddress"
            v-model="senderStreetAddress"
          />
        </div>
        <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="senderCity" label="City" />
            <base-input type="text" id="senderCity" v-model="senderCity" />
          </div>
          <div class="form__form-control">
            <field-label for="senderPostal" label="Post Code" />
            <base-input type="text" id="senderPostal" v-model="senderPostal" />
          </div>
          <div class="form__form-control">
            <field-label for="senderCountry" label="Country" />
            <base-input
              type="text"
              id="senderCountry"
              v-model="senderCountry"
            />
          </div>
        </div>
      </fieldset>
      <!-- Bill To -->
      <fieldset>
        <legend class="form__section-title h4">Bill To</legend>

        <div class="form__form-control">
          <field-label for="clientName" label="Client's Name" />
          <base-input type="text" id="clientName" v-model="clientName" />
        </div>
        <div class="form__form-control">
          <field-label for="clientEmail" label="Client's Email" />
          <base-input type="text" id="clientEmail" v-model="clientEmail" />
        </div>
        <div class="form__form-control">
          <field-label for="clientStreetAddress" label="Street Address" />
          <base-input
            type="text"
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>
        <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="clientCity" label="City" />
            <base-input type="text" id="clientCity" v-model="clientCity" />
          </div>
          <div class="form__form-control">
            <field-label for="clientPostal" label="Post Code" />
            <base-input type="text" id="clientPostal" v-model="clientPostal" />
          </div>
          <div class="form__form-control">
            <field-label for="clientCountry" label="Country" />
            <base-input
              type="text"
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
        <div class="form__col-group">
          <div class="form__form-control">
            <field-label for="invoiceDate" label="Invoice Date" />
            <base-input type="date" id="invoiceDate" v-model="invoiceDate" />
          </div>
          <div class="form__form-control">
            <field-label for="paymentTerms" label="Payment Terms" />
            <base-select :options="paymentTermsOptions"></base-select>
          </div>
        </div>
        <div class="form__form-control">
          <field-label for="description" label="Project Description" />
          <input type="text" id="description" />
        </div>
      </fieldset>
      <!-- Item List -->
      <fieldset>
        <legend class="h4 item-list">Item List</legend>
        <item-list></item-list>
      </fieldset>
    </div>
    <form-footer mode="create"></form-footer>
  </form>
</template>

<script>
import FieldLabel from "../ui/BaseLabel.vue";
import SelectField from "../ui/BaseSelect.vue";
import ItemList from "./ItemList.vue";
import FormFooter from "./FormFooter.vue";
import generateUniqueId from "../../utils/unique-id";

export default {
  components: { FieldLabel, SelectField, ItemList, FormFooter },
  inject: ["invoices"],
  data() {
    return {
      paymentTermsOptions: [
        { value: 1, label: "Net 1 Day" },
        { value: 7, label: "Net 7 Day" },
        { value: 14, label: "Net 14 Day" },
        { value: 30, label: "Net 30 Day" },
      ],
      senderStreetAddress: "",
      senderCity: "",
      senderPostal: "",
      senderCountry: "",
      clientName: "",
      clientEmail: "",
      clientStreetAddress: "",
      clientCity: "",
      clientPostal: "",
      clientCountry: "",
      invoiceDate: "",
    };
  },
  methods: {
    addInvoice(
      senderStreetAddress,
      senderCity,
      senderPostal,
      senderCountry,
      clientName,
      clientEmail,
      clientStreetAddress,
      clientCity,
      clientPostal,
      clientCountry,
      invoiceDate
    ) {
      const existingIds = this.invoices.map((inv) => inv.id);

      const newInvoice = {
        id: generateUniqueId(existingIds),
        senderStreetAddress,
        senderCity,
        senderPostal,
        senderCountry,
        clientName,
        clientEmail,
        clientStreetAddress,
        clientCity,
        clientPostal,
        clientCountry,
        invoiceDate,
      };
      this.invoices.unshift(newInvoice);
    },
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

fieldset:last-child {
  margin-bottom: 16px;
}

legend.item-list {
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: #777f98;
}
</style>
