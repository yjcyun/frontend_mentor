<script setup>
import CommentIcon from "@/assets/shared/icon-comments.svg?component";
import PfUpvote from "@/components/ui/pf-upvote.vue";
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
      <div class="pf-suggestion-card--comments">
        <CommentIcon />
        <p class="body1">4</p>
      </div>
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

  .pf-suggestion-card--comments {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: center;
    margin-left: auto;

    .body1 {
      font-weight: 700;
    }
  }
}
</style>
