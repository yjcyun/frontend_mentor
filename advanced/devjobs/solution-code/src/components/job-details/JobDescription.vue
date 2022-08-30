<template>
  <section class="job-desc">
    <div class="job-desc--heading">
      <div>
        <JobMeta :postedAt="postedAt" :contract="contract" />
        <h1>{{ position }}</h1>
        <JobLocation :location="location" />
      </div>
      <BaseButton>Apply Now</BaseButton>
    </div>

    <div class="job-desc--body">
      <div class="job-desc--block">
        <p class="text-body-2">{{ description }}</p>
      </div>

      <div class="job-desc--block">
        <h3 class="job-desc--subheading">Requirements</h3>
        <p class="text-body-2">{{ requirements.content }}</p>
        <ul>
          <li v-for="item in requirements.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="job-desc--block">
        <h3 class="job-desc--subheading">What You Will Do</h3>
        <p class="text-body-2">{{ role.content }}</p>
        <ol>
          <li v-for="item in role.items" :key="item">{{ item }}</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import JobMeta from "../ui/JobMeta.vue";
import JobLocation from "../ui/JobLocation.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: { JobMeta, JobLocation, BaseButton },
  props: {
    postedAt: {
      type: String,
    },
    contract: {
      type: String,
    },
    position: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    requirements: {
      type: Object,
    },
    role: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.job-desc {
  padding: 48px;
  background-color: var(--card-bg);
  margin-top: 32px;
  border-radius: 6px;
}

.job-desc--heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
}

.job-desc--heading h1 {
  margin: 8px 0;
  color: var(--input-text);
}

.job-desc--block {
  padding-bottom: 40px;
}

.job-desc--block .job-desc--subheading {
  padding-bottom: 28px;
}

.job-desc--block ul,
.job-desc--block ol {
  padding-top: 24px;
}

.job-desc--block li {
  padding-bottom: 8px;
}
</style>
