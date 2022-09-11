<template>
  <header class="roadmap-header">
    <div>
      <pf-goback />
      <h1>Roadmap</h1>
    </div>
    <pf-button>Add Feedback</pf-button>
  </header>
</template>

<style lang="scss" scoped>
.roadmap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bright-navy);
  padding: 27px 32px;
  border-radius: var(--border-radius);

  h1 {
    color: var(--color-white);
  }

  .btn {
    align-self: center;
  }
}
</style>
