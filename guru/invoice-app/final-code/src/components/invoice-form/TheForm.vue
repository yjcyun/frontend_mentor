<template>
  <form @submit.prevent="submitForm">
    <h2 class="form__header">
      {{ isEditMode ? "Edit" : "New Invoice" }} <span v-if="isEditMode">#</span
      >{{ isEditMode ? newInvoice.id : "" }}
    </h2>
    <div class="form__body">
      <!-- Bill From -->
      <fieldset>
        <legend class="form__section-title h4">Bill From</legend>

        <FormInput
          :isInvalid="getError('senderAddress.street')"
          :onBlur="onBlur('senderAddress.street')"
          name="senderAddress-street"
          label="Street Address"
          v-model="newInvoice.senderAddress.street"
        />
        <div class="form__cols form__cols-3">
          <FormInput
            :isInvalid="getError('senderAddress.city')"
            :onBlur="onBlur('senderAddress.city')"
            name="senderAddress-city"
            label="City"
            v-model="newInvoice.senderAddress.city"
            class="city"
          />
          <FormInput
            :isInvalid="getError('senderAddress.postCode')"
            :onBlur="onBlur('senderAddress.postCode')"
            name="senderAddress-postCode"
            label="Post Code"
            v-model="newInvoice.senderAddress.postCode"
            class="postCode"
          />
          <FormInput
            :isInvalid="getError('senderAddress.country')"
            :onBlur="onBlur('senderAddress.country')"
            name="senderAddress-country"
            label="Country"
            v-model="newInvoice.senderAddress.country"
            class="country"
          />
        </div>
      </fieldset>
      <!-- Bill To -->
      <fieldset>
        <legend class="form__section-title h4">Bill To</legend>

        <FormInput
          :isInvalid="getError('clientName')"
          :onBlur="onBlur('clientName')"
          name="clientName"
          label="Client's Name"
          v-model="newInvoice.clientName"
        />
        <FormInput
          :isInvalid="getError('clientEmail')"
          :onBlur="onBlur('clientEmail')"
          :errorMessage="v$.newInvoice.clientEmail.$errors[0]"
          name="clientEmail"
          label="Client's Email"
          v-model="newInvoice.clientEmail"
          placeholder="e.g. email@example.com"
        />
        <FormInput
          :isInvalid="getError('clientAddress.street')"
          :onBlur="onBlur('clientAddress.street')"
          name="clientAddress-street"
          label="Street Address"
          v-model="newInvoice.clientAddress.street"
        />
        <div class="form__cols form__cols-3">
          <FormInput
            :isInvalid="getError('clientAddress.city')"
            :onBlur="onBlur('clientAddress.city')"
            name="clientAddress-city"
            label="City"
            v-model="newInvoice.clientAddress.city"
            class="city"
          />
          <FormInput
            :isInvalid="getError('clientAddress.postCode')"
            :onBlur="onBlur('clientAddress.postCode')"
            name="clientAddress-postCode"
            label="Post Code"
            v-model="newInvoice.clientAddress.postCode"
            class="postCode"
          />
          <FormInput
            :isInvalid="getError('clientAddress.country')"
            :onBlur="onBlur('clientAddress.country')"
            name="clientAddress-country"
            label="Country"
            v-model="newInvoice.clientAddress.country"
            class="country"
          />
        </div>
        <div class="form__cols form__cols-2">
          <FormInput
            :isInvalid="getError('createdAt')"
            :onBlur="onBlur('createdAt')"
            name="invoiceDate"
            label="Invoice Date"
            v-model="newInvoice.createdAt"
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
          :isInvalid="getError('description')"
          :onBlur="onBlur('description')"
          name="description"
          label="Description"
          v-model="newInvoice.description"
          placeholder="e.g. Graphic Design Service"
        />
      </fieldset>
      <!-- Item List -->
      <fieldset>
        <legend class="h4 item-list">Item List</legend>
        <ItemList :items="newInvoice.items" />
      </fieldset>
      <div class="form__errors">
        <p v-for="(err, index) in errors" :key="index" class="label__error">
          - {{ err }}
        </p>
      </div>
    </div>
    <FormFooter
      :mode="isEditMode ? 'edit' : 'create'"
      :saveAsDraft="saveAsDraft"
    />
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import { cloneDeep, get } from "lodash";

import ItemList from "./ItemList.vue";
import FormFooter from "./FormFooter.vue";
import generateUniqueId from "../../utils/unique-id";
import formatDate from "../../utils/format-date";

export default {
  components: { ItemList, FormFooter },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      paymentTermsOptions: [
        { value: 1, label: "Net 1 Day" },
        { value: 7, label: "Net 7 Day" },
        { value: 14, label: "Net 14 Day" },
        { value: 30, label: "Net 30 Day" },
      ],
      newInvoice: {
        id: this.getNewInvoiceId(),
        status: "pending",
        createdAt: "",
        paymentDue: null,
        description: "",
        paymentTerms: "",
        clientName: "",
        clientEmail: "",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [],
        total: null,
      },
      errors: [],
    };
  },
  created() {
    if (this.isEditMode) {
      const currentInvoice = this.$store.getters.getInvoiceById(
        this.$route.params.invoiceId
      );

      this.newInvoice = cloneDeep(currentInvoice);
    }
  },
  computed: {
    isEditMode() {
      return this.$store.getters.getEditInvoice;
    },
  },
  methods: {
    ...mapActions(["toggleModal", "addInvoice", "saveInvoiceById"]),
    ...mapGetters(["getInvoices", "getEditInvoice", "getInvoiceById"]),

    async submitForm() {
      const validatedResult = await this.v$.$validate();

      if (!validatedResult) {
        const itemErrorMsg = "An item must be added";
        const fieldErrorMsg = "All fields must be added";

        this.v$.$errors.forEach((err) => {
          const itemErrors =
            err.$property === "name" ||
            err.$property === "quantity" ||
            err.$property === "price" ||
            err.$property === "items";

          if (itemErrors && this.errors.indexOf(itemErrorMsg) === -1) {
            this.errors.push(itemErrorMsg);
          } else if (!itemErrors && this.errors.indexOf(fieldErrorMsg) === -1) {
            this.errors.push(fieldErrorMsg);
          }
        });
        return;
      }

      if (this.isEditMode) {
        this.newInvoice.status = "pending";
        this.saveInvoiceById({ id: this.newInvoice.id, data: this.newInvoice });
      } else {
        const itemsTotal = this.newInvoice.items.reduce((acc, cur) => {
          return acc + Number(cur.total);
        }, 0);

        this.newInvoice.total = itemsTotal;
        this.addInvoice(this.newInvoice);
      }
      this.toggleModal();
    },
    getNewInvoiceId() {
      const invoices = this.getInvoices();
      const existingIds = invoices.map((inv) => inv.id);

      return generateUniqueId(existingIds);
    },
    onBlur(path) {
      return get(this.v$.newInvoice, path).$touch;
    },
    getError(path) {
      return get(this.v$.newInvoice, path).$error;
    },
    saveAsDraft() {
      this.newInvoice.status = "draft";
      this.newInvoice.createdAt = formatDate(new Date());
      this.newInvoice.paymentTerms = "14";
      this.addInvoice(this.newInvoice);
      this.toggleModal();
    },
  },
  validations: {
    newInvoice: {
      createdAt: { required },
      description: { required },
      paymentTerms: { required },
      clientName: { required },
      clientEmail: { required, email },
      senderAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
      clientAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
      items: { required },
    },
  },
};
</script>

<style scoped>
form {
  padding: 32px 24px 80px 26px;
  height: calc(100vh - 72px);
  display: grid;
  grid-template-rows: min-content 1fr 55px;
  overflow: auto;
}

.form__header {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: var(--text-0);
}

.form__body {
  margin-top: 48px;
}

.form__cols {
  display: grid;
  width: 100%;
  gap: 24px;
}

.form__cols-2 {
  grid-template-columns: 1fr;
}

.form__cols-3 {
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "city postCode" "country country";
}

.form__cols-3 .city {
  grid-area: city;
}

.form__cols-3 .postCode {
  grid-area: postCode;
}

.form__cols-3 .country {
  grid-area: country;
}

.form__section-title {
  color: var(--helper-accent--primary);
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

@media (min-width: 640px) {
  form {
    overflow: hidden;
    height: 100vh;
    padding: 56px 30px 56px 56px;
  }

  .form__body {
    height: calc(100% - 128px);
    overflow: auto;
    padding-right: 28px;
  }

  .form__cols-2 {
    grid-template-columns: 1fr 1fr;
  }

  .form__cols-3 {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "city postCode country";
  }
}

@media (min-width: 960px) {
  form {
    padding-right: 26px;
    display: grid;
    grid-template-rows: min-content 1fr 55px;
  }

  .form__body {
    height: calc(100% - 48px);
    margin-top: 48px;
  }
}
</style>
