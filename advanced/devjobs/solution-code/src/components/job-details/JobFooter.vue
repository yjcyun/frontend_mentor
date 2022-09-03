<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-wrapper--content">
        <h3>{{ position }}</h3>
        <p>{{ company }}</p>
      </div>
      <BaseButton><a href="">Apply Now</a></BaseButton>
    </div>
  </footer>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  props: {
    position: {
      type: String,
    },
    company: {
      type: String,
    },
  },
  components: { BaseButton },
};
</script>

<style scoped>
footer {
  background-color: var(--card-bg);
  padding: 23px 0;
  margin-top: 64px;
}

.footer-wrapper {
  max-width: var(--small-max-width);
  padding: var(--body-padding);
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.footer-wrapper--content {
  display: none;
}

.footer-wrapper button {
  max-width: 100%;
}

.footer-wrapper h3 {
  color: var(--input-text);
  margin-bottom: 7px;
}

.footer-wrapper p {
  color: var(--color-dark-grey);
}

@media (min-width: 640px) {
  .footer-wrapper--content {
    display: block;
  }

  .footer-wrapper button {
    max-width: 141px;
  }
}

@media (min-width: 768px) {
  footer {
    margin-top: 53px;
  }
}

@media (min-width: 996px) {
  footer {
    margin-top: 80px;
  }
}
</style>
