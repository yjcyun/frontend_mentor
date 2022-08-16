<template>
  <div>
    <the-header :numInvoices="invoices.length"></the-header>
    <empty-invoice v-if="invoices.length === 0"></empty-invoice>
    <invoice-list :invoices="invoices" v-else></invoice-list>
  </div>
</template>

<script>
import InvoiceList from "../components/invoices/InvoiceList.vue";
import TheHeader from "../components/header/TheHeader.vue";
import EmptyInvoice from "../components/invoices/EmptyInvoice.vue";
import devData from "../../data.json";
import generateUniqueId from "../utils/unique-id";

export default {
  components: {
    InvoiceList,
    TheHeader,
    EmptyInvoice,
  },
  provide() {
    return {
      invoices: this.invoices,
      addInvoice: this.addInvoice,
    };
  },
  data() {
    return {
      invoices: devData,
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
      invoiceDate,
      description
    ) {
      const existingIds = this.invoices.map((inv) => inv.id);

      const newInvoice = {
        id: generateUniqueId(existingIds),
        createdAt: invoiceDate, //Date.now()
        paymentDue: invoiceDate,
        description,
        paymentTerms: 7, // replace
        clientName,
        clientEmail,
        status: "pending",
        senderAddress: {
          street: senderStreetAddress,
          city: senderCity,
          postCode: senderPostal,
          country: senderCountry,
        },
        clientAddress: {
          street: clientStreetAddress,
          city: clientCity,
          postCode: clientPostal,
          country: clientCountry,
        },
      };
      this.invoices.unshift(newInvoice);
    },
  },
};
</script>
