<template>
  <div class="invoice-actions box">
    <div class="invoice-actions__status">
      <div class="body1">Status</div>
      <base-status :status="status"></base-status>
    </div>

    <div class="invoice-actions__cta">
      <base-button mode="btn-3" @click="openInvoiceModal">Edit</base-button>
      <base-button mode="btn-5" @click="openConfirmationModal"
        >Delete</base-button
      >
      <base-button mode="btn-2" @click="updateStatus" v-if="status !== 'paid'"
        >Mark as Paid</base-button
      >
    </div>

    <TheModal
      v-if="openModal"
      title="Confirm Deletion"
      :body="`Are you sure you want to delete invoice #${id}? This action cannot be undone.`"
      @onClose="closeModal"
      @onDelete="removeInvoice"
    >
    </TheModal>
  </div>
</template>

<script>
import BaseStatus from "../ui/BaseStatus.vue";
import BaseButton from "../ui/BaseButton.vue";
import { mapActions } from "vuex";

export default {
  components: { BaseStatus, BaseButton },
  props: ["status", "id"],
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    ...mapActions([
      "toggleModal",
      "toggleEditInvoice",
      "updateStatusById",
      "deleteInvoice",
    ]),
    openInvoiceModal() {
      this.toggleEditInvoice(true);
      this.toggleModal();
    },
    updateStatus() {
      this.updateStatusById({
        id: this.$route.params.invoiceId,
        status: "paid",
      });
    },
    openConfirmationModal() {
      this.openModal = true;
    },
    removeInvoice() {
      console.log("remove invoice");
      this.closeModal();
      this.$router.push("/");

      this.deleteInvoice(this.$route.params.invoiceId);
    },
    closeModal() {
      this.openModal = false;
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-white);
  padding: 21px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

@media (min-width: 640px) {
  .invoice-actions {
    padding: 20px 32px;
  }

  .invoice-actions__cta {
    padding: 0;
    position: static;
  }

  .invoice-actions__status {
    display: flex;
    gap: 16px;
    width: auto;
  }
}
</style>
