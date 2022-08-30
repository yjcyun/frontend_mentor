<template>
  <div>
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
  </div>
</template>

<script>
import JobHeading from "../components/job-details/JobHeading.vue";
import JobDescription from "../components/job-details/JobDescription.vue";

export default {
  components: { JobHeading, JobDescription },
  computed: {
    job() {
      const jobId = Number(this.$route.params.jobId);
      return this.$store.getters.getJobById(jobId);
    },
  },
};
</script>
