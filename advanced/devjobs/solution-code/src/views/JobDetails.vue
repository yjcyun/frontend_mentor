<template>
  <AppContainer detailsPage>
    <JobHeading
      :id="job.id"
      :logo="job.logo"
      :logoBackground="job.logoBackground"
      :company="job.company"
      :website="job.website"
    />
    <JobDescription
      :postedAt="job.postedAt"
      :contract="job.contract"
      :position="job.position"
      :location="job.location"
      :description="job.description"
      :requirements="job.requirements"
      :role="job.role"
    />
  </AppContainer>
  <JobFooter :position="job.position" :company="job.company" />
</template>

<script>
import JobHeading from "@/components/job-details/JobHeading.vue";
import JobDescription from "@/components/job-details/JobDescription.vue";
import JobFooter from "@/components/job-details/JobFooter.vue";
import AppContainer from "@/components/layout/AppContainer.vue";

export default {
  components: { JobHeading, JobDescription, JobFooter, AppContainer },
  computed: {
    job() {
      const jobId = Number(this.$route.params.jobId);
      return this.$store.getters.jobById(jobId);
    },
  },
  mounted() {
    document.title = `${this.job.company} - ${this.job.position} | devjobs`;
  },
};
</script>
