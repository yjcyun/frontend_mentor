<template>
  <teleport to="body">
    <div class="overlay" @click="closeForm"></div>
    <dialog open>
      <TheForm />
    </dialog>
  </teleport>
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
  z-index: 0;
}

dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 719px;
  height: 100vh;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  padding-left: 103px;
  border-radius: 0px 20px 20px 0px;
}
</style>
