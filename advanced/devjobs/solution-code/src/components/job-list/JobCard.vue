<template>
  <router-link class="job-card" :to="jobLink">
    <div class="job-card--logo">
      <img :src="imgPath" :alt="company" />
    </div>
    <div class="job-card--body">
      <JobMeta :postedAt="postedAt" :contract="contract" />
      <h3>{{ position }}</h3>
      <p class="company">{{ company }}</p>
      <JobLocation :location="location" />
    </div>
  </router-link>
</template>

<script>
import JobMeta from "../ui/JobMeta.vue";
import JobLocation from "../ui/JobLocation.vue";

export default {
  components: { JobMeta, JobLocation },
  props: {
    id: {
      type: Number,
    },
    logo: {
      type: String,
    },
    logoBackground: {
      type: String,
    },
    postedAt: {
      type: String,
    },
    contract: {
      type: String,
    },
    position: {
      type: String,
    },
    company: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  computed: {
    imgPath() {
      return "../../../static" + this.logo.substring(1);
    },
    jobLink() {
      return `/${this.id}`;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.job-card {
  background-color: var(--card-bg);
  padding: 49px 32px 32px;
  position: relative;
  border-radius: 6px;
  color: var(--color-dark-grey);
}

.job-card .job-card--logo {
  position: absolute;
  top: -25px;
  background-color: v-bind(logoBackground);
  width: 50px;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.job-card--body h3 {
  margin: 13px 0 17px;
  color: var(--input-text);
}

.job-card--body .company {
  margin-bottom: 44px;
}
</style>
