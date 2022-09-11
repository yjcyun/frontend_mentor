<script setup>
import RoadmapCard from "./roadmap-card.vue";

const props = defineProps({
  title: {
    type: String,
  },
  size: {
    type: Number,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="roadmap-card-col">
    <h3>{{ title }} ({{ size }})</h3>
    <p>{{ description }}</p>
    <div class="roadmap-cards">
      <roadmap-card></roadmap-card>
      <roadmap-card></roadmap-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roadmap-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}
</style>
