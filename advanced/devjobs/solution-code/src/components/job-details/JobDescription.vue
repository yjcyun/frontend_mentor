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
          <li v-for="item in requirements.items" :key="item">
            <p class="text-body-2">{{ item }}</p>
          </li>
        </ul>
      </div>

      <div class="job-desc--block">
        <h3 class="job-desc--subheading">What You Will Do</h3>
        <p class="text-body-2">{{ role.content }}</p>
        <ol>
          <li v-for="item in role.items" :key="item">
            <p class="text-body-2">{{ item }}</p>
          </li>
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
  padding: 40px 24px;
  background-color: var(--card-bg);
  margin-top: 24px;
  border-radius: 6px;
}

.job-desc--heading {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 32px;
  gap: 50px;
}

.job-desc--heading h1 {
  margin: 8px 0 12px;
  color: var(--input-text);
}

.job-desc--heading button {
  max-width: 100%;
}

.job-desc--block:not(:last-child) {
  padding-bottom: 40px;
}

.job-desc--block .job-desc--subheading {
  padding-bottom: 28px;
  color: var(--input-text);
}

.job-desc--block ul,
.job-desc--block ol {
  padding-top: 32px;
  padding-inline-start: 0;
  position: relative;
}

.job-desc--block li {
  padding-bottom: 8px;
  list-style: none;
  padding-left: 32px;
}

.job-desc--block ul li::before {
  content: "\2022";
  color: var(--color-violet);
  position: absolute;
  left: 0;
}

.job-desc--block ol {
  counter-reset: li;
}

.job-desc--block ol li {
  counter-increment: li;
}

.job-desc--block ol li::before {
  content: counter(li);
  color: var(--color-violet);
  position: absolute;
  left: 0;
  font-weight: 700;
}

@media (min-width: 640px) {
  .job-desc {
    padding: 48px;
    margin-top: 32px;
  }

  .job-desc--heading {
    flex-direction: row;
    align-items: center;
    padding-bottom: 40px;
    gap: 0;
  }

  .job-desc--heading button {
    max-width: 141px;
  }

  .job-desc--heading h1 {
    margin: 8px 0;
  }

  .job-desc--block ul,
  .job-desc--block ol {
    padding-top: 24px;
  }
}
</style>
