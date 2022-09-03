<template>
  <div class="job-meta text-body">
    <span>{{ postedAt }}</span>
    <span class="job-meta--contract">{{ contract }}</span>
  </div>
</template>

<script>
export default {
  props: {
    postedAt: {
      type: String,
      required: true,
    },
    contract: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.job-meta {
  color: var(--color-dark-grey);
}

.job-meta--contract {
  padding-left: 12px;
}

.job-meta--contract::before {
  content: "●";
  font-size: 10px;
  position: relative;
  margin-right: 12px;
}
</style>
