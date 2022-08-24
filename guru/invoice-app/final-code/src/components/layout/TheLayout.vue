<template>
  <div class="layout">
    <the-sidebar></the-sidebar>
    <FormDialog v-if="isInvoiceModalOpen" />
    <main :class="smallPadding">
      <div class="wrapper"><slot></slot></div>
    </main>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar.vue";
import FormDialog from "../invoice-form/FormDialog.vue";

export default {
  components: { TheSidebar, FormDialog },
  computed: {
    smallPadding() {
      return this.$route.params.invoiceId ? "sm-padding" : "";
    },
    isInvoiceModalOpen() {
      return this.$store.state.invoiceModal;
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

main {
  margin: auto;
  padding: 72px 24px;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.sm-padding {
  padding: 64px 24px;
}

.wrapper {
  max-width: 730px;
  margin: auto;
}

@media (min-width: 960px) {
  .layout {
    flex-direction: row;
  }
}
</style>
