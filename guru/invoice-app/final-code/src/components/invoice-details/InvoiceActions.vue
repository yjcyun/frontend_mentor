<template>
  <div class="invoice-actions box">
    <div class="invoice-actions__status">
      <div class="body1">Status</div>
      <base-status :status="status"></base-status>
    </div>

    <div class="invoice-actions__cta">
      <base-button mode="btn-3" @click="editInvoice">Edit</base-button>
      <base-button mode="btn-5">Delete</base-button>
      <base-button mode="btn-2">Mark as Paid</base-button>
    </div>
  </div>
</template>

<script>
import BaseStatus from "../ui/BaseStatus.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: { BaseStatus, BaseButton },
  props: ["status"],
  methods: {
    editInvoice() {
      console.log("clicked!");
    },
  },
};
</script>

<style scoped>
.invoice-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 27px;
  margin-top: 32px;
}

.invoice-actions__status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.invoice-actions__cta {
  display: none;
}

@media (min-width: 640px) {
  .invoice-actions {
    padding: 20px 32px;
  }

  .invoice-actions__cta {
    display: flex;
    gap: 8px;
  }

  .invoice-actions__status {
    display: flex;
    gap: 16px;
    width: auto;
  }
}
</style>
