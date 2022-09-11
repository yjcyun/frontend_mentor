<script setup>
import RoadmapHeader from "../components/pf-roadmap/roadmap-header.vue";

import RoadmapCardCol from "../components/pf-roadmap/roadmap-card-col.vue";
</script>

<template>
  <div>
    <roadmap-header></roadmap-header>
    <div class="roadmap-cols">
      <roadmap-card-col
        title="Planned"
        :size="2"
        description="Ideas prioritized for research"
      ></roadmap-card-col>
      <roadmap-card-col
        title="Planned"
        :size="2"
        description="Ideas prioritized for research"
      ></roadmap-card-col>
      <roadmap-card-col
        title="Planned"
        :size="2"
        description="Ideas prioritized for research"
      ></roadmap-card-col>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roadmap-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 48px;
}
</style>
