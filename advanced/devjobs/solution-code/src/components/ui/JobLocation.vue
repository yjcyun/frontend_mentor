<template>
  <h4 class="job-location">{{ location }}</h4>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
    },
  },
};
</script>

<style scoped>
.job-location {
  color: var(--color-violet);
}
</style>
