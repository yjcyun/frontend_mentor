<script setup>
import CommentIcon from "@/assets/shared/icon-comments.svg?component";
import PfUpvote from "@/components/ui/pf-upvote.vue";
import PfCommentNumbers from "../ui/pf-comment-numbers.vue";
</script>

<template>
  <pf-card>
    <div class="pf-suggestion-card">
      <pf-upvote></pf-upvote>
      <div class="pf-suggestion-card--text">
        <h3>Add tags for solutions</h3>
        <p>Easier to search for solutions based on a specific stack.</p>
        <pf-chip text="Enhancement"></pf-chip>
      </div>
      <pf-comment-numbers />
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-suggestion-card {
  padding: 28px 32px;
  display: flex;

  .pf-upvote {
    align-self: flex-start;
    margin-right: 40px;
  }

  .pf-suggestion-card--text {
    h3 {
      color: var(--color-bright-navy);
    }

    p {
      margin: 4px 0 12px;
    }
  }
}
</style>
