<template>
  <AppContainer>
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
    <div class="load-more" v-if="displayLoadMore">
      <BaseButton @click="loadMore">Load More</BaseButton>
    </div>
  </AppContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import JobFilter from "@/components/job-list/JobFilter.vue";
import JobCard from "@/components/job-list/JobCard.vue";
import AppContainer from "@/components/layout/AppContainer.vue";

export default {
  components: { JobFilter, JobCard, AppContainer },
  computed: {
    ...mapGetters(["filteredJobs", "allJobs", "jobsPerPage"]),
    jobs() {
      return this.filteredJobs;
    },
    displayLoadMore() {
      return (
        this.filteredJobs.length < this.allJobs.length &&
        this.filteredJobs.length >= this.jobsPerPage
      );
    },
  },
  methods: {
    ...mapActions(["loadMoreJobs"]),
    loadMore() {
      this.loadMoreJobs();
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
}

.load-more {
  text-align: center;
  padding-bottom: 62px;
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

  .load-more {
    padding-bottom: 104px;
  }
}
</style>
