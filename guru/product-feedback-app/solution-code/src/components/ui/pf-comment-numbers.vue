<script setup>
import CommentIcon from "@/assets/shared/icon-comments.svg?component";

const props = defineProps({
  total: Number,
});
</script>

<template>
  <div class="pf-comment-numbers">
    <CommentIcon />
    <p class="body1">{{ total }}</p>
  </div>
</template>

<style lang="scss" scoped>
.pf-comment-numbers {
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
  margin-left: auto;

  .body1 {
    font-weight: 700;
  }
}
</style>
