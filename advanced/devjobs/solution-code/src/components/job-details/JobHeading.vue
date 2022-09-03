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
        <p>{{ companySite }}</p>
      </div>
      <BaseButton mode="secondary"
        ><a :href="website">Company Site</a></BaseButton
      >
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
    companySite() {
      return this.company.toLowerCase() + ".com";
    },
  },
  components: { BaseButton },
};
</script>

<style scoped>
.job-heading {
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg);
  border-radius: 6px;
  position: relative;
}

.job-heading--logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
}

.job-heading--content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 49px 0 32px;
}

.job-heading--name h2 {
  color: var(--input-text);
  margin-bottom: 13px;
}

.job-heading--name p {
  color: var(--color-dark-grey);
  margin-bottom: 27px;
}

@media (min-width: 640px) {
  .job-heading {
    flex-direction: row;
    border-radius: 0 6px 6px 6px;
    overflow: hidden;
  }

  .job-heading--logo {
    width: 140px;
    height: 140px;
    border-radius: 0;
    position: static;
    top: 0;
    left: 0;
    transform: none;
  }

  .job-heading--logo img {
    width: 81px;
  }

  .job-heading--content {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 41px 40px;
  }

  .job-heading--name h2 {
    margin-bottom: 7px;
  }

  .job-heading--name p {
    margin-bottom: 0;
  }
}
</style>
