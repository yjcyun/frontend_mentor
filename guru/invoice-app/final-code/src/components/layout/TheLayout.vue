<template>
  <div class="layout">
    <the-sidebar></the-sidebar>
    <main>
      <div class="wrapper"><slot></slot></div>
    </main>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar.vue";

export default {
  components: { TheSidebar },
};
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

main {
  margin: auto;
  padding: 72px 24px;
  width: 100%;
}

.wrapper {
  max-width: 730px;
  margin: auto;
}
</style>
