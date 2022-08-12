<template>
  <div>
    <img
      src="../../assets/illustration-empty.svg"
      alt="Illustration of a woman with a megaphone and images of mail envelopes"
    />
    <h2 class="h2">There is nothing here</h2>
    <p class="body1">
      Create an invoice by clicking the <span>New Invoice</span> button and get
      started
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 242px;
  margin: auto;
  text-align: center;
}

h2 {
  margin: 64px 0 24px;
}

p {
  color: var(--color-blue-88);
}

p span {
  font-weight: 700;
}
</style>
