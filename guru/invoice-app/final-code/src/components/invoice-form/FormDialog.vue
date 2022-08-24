<template>
  <div class="overlay" @click="closeForm"></div>
  <dialog open>
    <TheForm />
  </dialog>
</template>

<script>
import TheForm from "./TheForm.vue";

export default {
  components: { TheForm },

  methods: {
    closeForm() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

dialog {
  position: fixed;
  top: 72px;
  left: 0;
  max-width: 616px;
  height: calc(100vh - 72px);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
}

@media (min-width: 640px) {
  dialog {
    top: 80px;
    height: calc(100vh - 80px);
    border-radius: 0px 20px 20px 0px;
  }
}

@media (min-width: 960px) {
  dialog {
    top: 0;
    max-width: 719px;
    height: 100vh;
    padding-left: 103px;
  }
}
</style>
