<script setup>
import PfSuggestionCard from "../components/pf-suggestions/pf-suggestion-card.vue";
import PfDetailsHeader from "../components/pf-details/pf-details-header.vue";
import PfComments from "../components/pf-details/pf-comments.vue";
import PfAddComment from "../components/pf-details/pf-add-comment.vue";
</script>

<template>
  <div>
    <pf-details-header />
    <pf-suggestion-card />
    <pf-comments></pf-comments>
    <pf-add-comment></pf-add-comment>
  </div>
</template>
