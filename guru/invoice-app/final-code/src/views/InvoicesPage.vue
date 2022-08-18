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
      sendInvoice: this.sendInvoice,
    };
  },
  data() {
    return {
      invoices: devData,
    };
  },
  methods: {
    sendInvoice(
      fromStreetAddress,
      fromCity,
      fromPost,
      fromCountry,
      clientName,
      clientEmail,
      toStreetAddress,
      toCity,
      toPost,
      toCountry,
      invoiceDate,
      paymentTerms,
      description,
      items
    ) {
      const existingIds = this.invoices.map((inv) => inv.id);

      const newInvoice = {
        id: generateUniqueId(existingIds),
        createdAt: invoiceDate, //Date.now()
        paymentDue: invoiceDate,
        description,
        paymentTerms,
        clientName,
        clientEmail,
        status: "pending",
        senderAddress: {
          street: fromStreetAddress,
          city: fromCity,
          postCode: fromPost,
          country: fromCountry,
        },
        clientAddress: {
          street: toStreetAddress,
          city: toCity,
          postCode: toPost,
          country: toCountry,
        },
        items,
      };
      console.log(newInvoice);
      this.invoices.unshift(newInvoice);
    },
  },
};
</script>
