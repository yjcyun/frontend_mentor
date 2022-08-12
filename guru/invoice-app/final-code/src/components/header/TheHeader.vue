<template>
  <div class="the-header">
    <div>
      <h1 class="h1">Invoices</h1>
      <p class="body1 sub-heading">There are 6 total invoices</p>
    </div>
    <div class="end">
      <div>Filter Component</div>
      <base-button mode="btn-1">New Invoice</base-button>
    </div>
  </div>
</template>

<style scoped>
.the-header {
  margin-bottom: 65px;
  display: flex;
  justify-content: space-between;
}
.sub-heading {
  margin-top: 8px;
  color: var(--color-blue-88);
}

.end {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
