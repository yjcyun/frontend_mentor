<template>
  <aside>
    <div class="logo-wrapper">
      <img src="../../assets/logo.svg" alt="Invoices App Logo" />
    </div>

    <button class="theme-toggler">
      <img src="../../assets/icon-moon.svg" alt="Moon Icon" />
    </button>
    <button class="user">
      <img src="../../assets/image-avatar.jpg" alt="User Avatar" />
    </button>
  </aside>
</template>

<style scoped>
aside {
  background: var(--color-navy-37);
  border-radius: 0px 20px 20px 0px;
  height: 100vh;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-wrapper {
  padding: 32px 31px;
  background-color: var(--color-purple-7C);
  position: relative;
  z-index: 1;
  border-radius: 0 20px 20px 0;
  margin-bottom: auto;
}

.logo-wrapper::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: var(--color-purple-92);
  left: 0;
  bottom: 0;
  border-radius: 20px 0;
  z-index: -1;
}

.logo-wrapper img {
  width: 40px;
}

.user {
  padding: 24px 0;
  border-top: 1px solid #494e6e;
  margin-top: 32px;
  width: 100%;
}

.user img {
  width: 40px;
  border-radius: 50%;
}
</style>
