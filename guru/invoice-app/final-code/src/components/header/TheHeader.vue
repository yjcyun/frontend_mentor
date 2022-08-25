<template>
  <div class="the-header">
    <div>
      <h1 class="h1">Invoices</h1>
      <p class="body1 sub-heading">{{ displayInvoiceAmount }}</p>
    </div>
    <div class="end">
      <FilterStatus :label="displayFilterLabel" />
      <base-button mode="btn-1" @click="openInvoiceModal">{{
        displayNewButtonLabel
      }}</base-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FilterStatus from "./FilterStatus.vue";

export default {
  props: ["numInvoices"],
  data() {
    return {
      width: window.innerWidth,
      filters: "total",
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    ...mapGetters(["getFilter"]),
    displayFilteredBy() {
      const filteredBy = Object.keys(this.getFilter).reduce((prev, key) => {
        if (this.getFilter[key]) {
          prev[key] = this.getFilter[key];
        }
        return prev;
      }, {});
      return Object.keys(filteredBy).join(", ");
    },
    displayInvoiceAmount() {
      const filteredByObj = Object.keys(this.getFilter).reduce((prev, key) => {
        if (this.getFilter[key]) {
          prev[key] = this.getFilter[key];
        }
        return prev;
      }, {});
      const filteredByArr = Object.keys(filteredByObj);

      const filteredBy =
        filteredByArr.length === 1 ? filteredByArr[0] : "total";

      if (this.numInvoices) {
        if (this.width > 650) {
          return `There are ${this.numInvoices} ${filteredBy} invoices`;
        } else {
          return `${this.numInvoices}  invoices`;
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
    displayFilterLabel() {
      if (this.width > 650) {
        return `Filter by status`;
      } else {
        return `Filter`;
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
