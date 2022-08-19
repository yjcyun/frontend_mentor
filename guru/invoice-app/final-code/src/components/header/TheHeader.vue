<template>
  <div class="the-header">
    <div>
      <h1 class="h1">Invoices</h1>
      <p class="body1 sub-heading">
        {{ subHeadingContent }}
      </p>
    </div>
    <div class="end">
      <div>Filter Component</div>
      <base-button mode="btn-1" @click="openInvoiceModal"
        >New Invoice</base-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["numInvoices"],
  computed: {
    subHeadingContent() {
      return this.numInvoices
        ? `There are ${this.numInvoices} total invoices`
        : "No invoices";
    },
  },
  methods: {
    ...mapActions(["toggleModal", "toggleEditInvoice"]),
    openInvoiceModal() {
      this.toggleEditInvoice(false);
      this.toggleModal();
    },
  },
};
</script>

<style scoped>
.the-header {
  margin-bottom: 65px;
  display: flex;
  justify-content: space-between;
}

.sub-heading {
  margin-top: 8px;
  color: var(--color-blue-88);
}

.end {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
