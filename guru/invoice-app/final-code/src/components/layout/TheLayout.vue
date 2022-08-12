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
  flex-direction: column;
}

main {
  margin: auto;
  padding: 72px 24px;
  width: 100%;
  min-height: 100vh;
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
