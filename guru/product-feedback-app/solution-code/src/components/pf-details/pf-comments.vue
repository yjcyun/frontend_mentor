<script setup>
import PfComment from "./pf-comment.vue";
</script>

<template>
  <pf-card>
    <div class="pf-comments">
      <h3 class="pf-comments--header">3 Comments</h3>
      <div>
        <pf-comment />
        <pf-comment />
      </div>
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-comments {
  padding: 24px 34px 16px;
  margin: 24px 0;

  .pf-comments--header {
    color: var(--color-bright-navy);
    margin-bottom: 28px;
  }
}
</style>
