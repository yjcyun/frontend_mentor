<template>
  <form-dialog v-if="openForm"></form-dialog>
  <div class="the-header">
    <div>
      <h1 class="h1">Invoices</h1>
      <p class="body1 sub-heading">
        {{ subHeadingContent }}
      </p>
    </div>
    <div class="end">
      <div>Filter Component</div>
      <base-button mode="btn-1" @click="addInvoice">New Invoice</base-button>
    </div>
  </div>
</template>

<script>
import FormDialog from "../invoice-form/FormDialog.vue";

export default {
  props: ["numInvoices"],
  components: { FormDialog },
  data() {
    return {
      openForm: false,
    };
  },
  computed: {
    subHeadingContent() {
      return this.numInvoices
        ? `There are ${this.numInvoices} total invoices`
        : "No invoices";
    },
  },
  methods: {
    addInvoice() {
      this.openForm = true;
    },
    closeForm() {
      this.openForm = false;
    },
  },
  provide() {
    return { closeForm: this.closeForm };
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
