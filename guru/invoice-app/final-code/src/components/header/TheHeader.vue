<template>
  <div class="the-header">
    <div>
      <h1 class="h1">Invoices</h1>
      <p class="body1 sub-heading">{{ displayInvoiceAmount }}</p>
    </div>
    <div class="end">
      <FilterStatus />
      <base-button mode="btn-1" @click="openInvoiceModal">{{
        displayNewButtonLabel
      }}</base-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FilterStatus from "./FilterStatus.vue";

export default {
  props: ["numInvoices"],
  data() {
    return { width: window.innerWidth };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    displayInvoiceAmount() {
      if (this.numInvoices) {
        if (this.width > 650) {
          return `There are ${this.numInvoices} total invoices`;
        } else {
          return `${this.numInvoices} invoices`;
        }
      } else {
        return "No invoices";
      }
    },
    displayNewButtonLabel() {
      if (this.width > 650) {
        return `New Invoice`;
      } else {
        return `New`;
      }
    },
  },
  methods: {
    ...mapActions(["toggleModal", "toggleEditInvoice"]),
    onResize() {
      this.width = window.innerWidth;
    },
    openInvoiceModal() {
      this.toggleEditInvoice(false);
      this.toggleModal();
    },
  },
  components: { FilterStatus },
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
  gap: 18px;
}

@media (min-width: 768px) {
  .end {
    gap: 40px;
  }
}
</style>
