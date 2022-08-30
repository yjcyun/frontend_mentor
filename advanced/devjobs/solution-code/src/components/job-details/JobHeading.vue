<template>
  <div class="job-heading">
    <div
      class="job-heading--logo"
      :style="{ 'background-color': logoBackground }"
    >
      <img :src="imgPath" :alt="company" />
    </div>
    <div class="job-heading--content">
      <div class="job-heading--name">
        <h2>{{ company }}</h2>
        <p>{{ website }}</p>
      </div>
      <BaseButton><a :href="website">Company Site</a></BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
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
    company: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  computed: {
    imgPath() {
      return "../../../static" + this.logo.substring(1);
    },
    jobLink() {
      return `/${this.id.toString()}`;
    },
  },
  components: { BaseButton },
};
</script>

<style scoped>
.job-heading {
  display: flex;
  background-color: var(--card-bg);
  border-radius: 0 6px 6px 6px;
  overflow: hidden;
}

.job-heading--logo {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.job-heading--logo img {
  width: 81px;
}

.job-heading--content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 41px 40px;
}

.job-heading--name h2 {
  color: var(--input-text);
  margin-bottom: 7px;
}

.job-heading--name p {
  color: var(--color-dark-grey);
}
</style>
