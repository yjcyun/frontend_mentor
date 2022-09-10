<script setup>
import Illustration from "../../assets/suggestions/illustration-empty.svg?component";
import PlusIcon from "../../assets/shared/icon-plus.svg?component";
</script>

<template>
  <pf-card>
    <div class="pf-empty">
      <Illustration />
      <div class="pf-empty--content">
        <h1>There is no feedback yet.</h1>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <pf-button>
        <template #icon><PlusIcon /></template>
        Add Feedback
      </pf-button>
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 72px - 24px - 94px - 129px);
  min-height: 600px;

  .pf-empty--content {
    max-width: 410px;
    text-align: center;
    margin: 35px 0 48px;

    h1 {
      margin-bottom: 16px;
      color: var(--color-bright-navy);
    }
  }
}
</style>
