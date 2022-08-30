<template>
  <div>
    <JobFilter />
    <div class="jobs-list">
      <JobCard
        v-for="job in jobs"
        :key="job.id"
        :id="job.id"
        :logo="job.logo"
        :logoBackground="job.logoBackground"
        :postedAt="job.postedAt"
        :contract="job.contract"
        :position="job.position"
        :company="job.company"
        :location="job.location"
      />
    </div>
  </div>
</template>

<script>
import JobFilter from "../components/ui/JobFilter.vue";
import JobCard from "../components/ui/JobCard.vue";

export default {
  components: { JobFilter, JobCard },
  computed: {
    jobs() {
      return this.$store.getters.getJobs;
    },
  },
};
</script>

<style scoped>
.jobs-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  grid-row-gap: 50px;
  padding: 57px 0 32px;
  max-width: 327px;
  margin: auto;
}

@media (min-width: 768px) {
  .jobs-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 11px;
    grid-row-gap: 65px;
    padding: 70px 0 56px;
    max-width: inherit;
  }
}

@media (min-width: 996px) {
  .jobs-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    grid-row-gap: 65px;
    padding: 105px 0 56px;
  }
}
</style>
