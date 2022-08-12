<template>
  <invoice-list :invoices="invoices"></invoice-list>
</template>

<script>
import InvoiceList from "./components/invoices/InvoiceList.vue";

export default {
  components: { InvoiceList },
  data() {
    return {
      invoices: [
        {
          id: "RT3080",
          createdAt: "2021-08-18",
          paymentDue: "2021-08-19",
          description: "Re-branding",
          paymentTerms: 1,
          clientName: "Jensen Huang",
          clientEmail: "jensenh@mail.com",
          status: "paid",
          senderAddress: {
            street: "19 Union Terrace",
            city: "London",
            postCode: "E1 3EZ",
            country: "United Kingdom",
          },
          clientAddress: {
            street: "106 Kendell Street",
            city: "Sharrington",
            postCode: "NR24 5WQ",
            country: "United Kingdom",
          },
          items: [
            {
              name: "Brand Guidelines",
              quantity: 1,
              price: 1800.9,
              total: 1800.9,
            },
          ],
          total: 1800.9,
        },
      ],
    };
  },
};
</script>
