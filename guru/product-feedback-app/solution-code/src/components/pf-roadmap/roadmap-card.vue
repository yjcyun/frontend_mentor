<script setup>
import PfStatus from "../ui/pf-status.vue";
import PfCommentNumbers from "../ui/pf-comment-numbers.vue";
</script>

<template>
  <div class="roadmap-card">
    <pf-status status="Planned"></pf-status>
    <div class="roadmap-card--text">
      <h3>More comprehensive reports</h3>
      <p>It would be great to see a more detailed breakdown of solutions.</p>
    </div>
    <pf-chip text="Feature" />
    <div class="roadmap-card--footer">
      <pf-upvote :votes="123" orientation="horizontal" />
      <pf-comment-numbers />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roadmap-card {
  background-color: var(--color-white);
  padding: 25px 32px 32px;
  border-radius: 5px;
  border-top: 6px solid var(--color-salmon);

  .roadmap-card--text {
    margin: 8px 0 16px;

    h3 {
      margin-bottom: 4px;
    }
  }

  .roadmap-card--footer {
    display: flex;
    margin-top: 16px;
  }
}
</style>
