<template>
  <header>
    <div class="header-wrapper">
      <img src="../../assets/logo.svg" alt="devjobs Logo" />
      <div>Toggler</div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-image: var(--header-bg);
  height: 136px;
  background-size: cover;
  background-repeat: no-repeat;
}

.header-wrapper {
  max-width: var(--max-width);
  margin: auto;
  padding: var(--body-padding);
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  header {
    height: 160px;
    border-bottom-left-radius: 100px;
  }

  .header-wrapper {
    padding-top: 42px;
  }
}

@media (min-width: 996px) {
  .header-wrapper {
    padding-top: 45px;
  }
}
</style>
