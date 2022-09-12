<script setup>
import CommentIcon from "@/assets/shared/icon-comments.svg?component";
import PfUpvote from "@/components/ui/pf-upvote.vue";
import PfCommentNumbers from "../ui/pf-comment-numbers.vue";

const props = defineProps({
  title: String,
  description: String,
  category: String,
  upvotes: Number,
  numOfComments: Number,
});
</script>

<template>
  <pf-card>
    <div class="pf-suggestion-card">
      <pf-upvote :votes="upvotes"></pf-upvote>
      <div class="pf-suggestion-card--text">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <pf-chip :text="category"></pf-chip>
      </div>
      <pf-comment-numbers :total="numOfComments" />
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
