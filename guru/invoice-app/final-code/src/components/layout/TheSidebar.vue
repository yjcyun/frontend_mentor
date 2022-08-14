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
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 72px;
  z-index: 20;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  background-color: var(--color-purple-7C);
  position: relative;
  z-index: 1;
  border-radius: 0 20px 20px 0;
  margin-right: auto;
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
  width: 28px;
}

.user {
  padding: 0 24px;
  margin-left: 24px;
  border-left: 1px solid #494e6e;
  height: 100%;
}

.user img {
  width: 32px;
  border-radius: 50%;
}

@media (min-width: 640px) {
  aside {
    height: 80px;
  }

  .logo-wrapper {
    width: 80px;
    height: 80px;
  }

  .logo-wrapper img {
    width: 31px;
  }

  .user {
    padding: 0 32px;
    margin-left: 32px;
  }
}

@media (min-width: 960px) {
  aside {
    height: 100vh;
    border-radius: 0px 20px 20px 0px;
    flex-direction: column;
    align-items: center;
  }

  .logo-wrapper {
    margin-bottom: auto;
    margin-right: 0;
    width: 103px;
    height: 103px;
  }

  .logo-wrapper img,
  .user img {
    width: 40px;
  }

  .user {
    border-top: 1px solid #494e6e;
    border-left: none;
    padding: 24px 0;
    margin-top: 32px;
    margin-left: 0;
    width: 100%;
    height: auto;
  }
}
</style>
