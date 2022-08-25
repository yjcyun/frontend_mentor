<template>
  <aside>
    <div class="logo-wrapper">
      <img src="../../assets/logo.svg" alt="Invoices App Logo" />
    </div>

    <button class="theme-toggler" @click="toggleTheme">
      <img src="../../assets/icon-moon.svg" alt="Moon Icon" />
    </button>
    <button class="user">
      <img src="../../assets/image-avatar.jpg" alt="User Avatar" />
    </button>
  </aside>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-theme: dark)"
      ).matches;

      if (hasDarkPreference) return "dark-theme";
      else return "light-theme";
    },
  },
};
</script>

<style scoped>
aside {
  background-color: var(--element-1);
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
  background-color: var(--helper-accent--primary);
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
  background-color: var(--helper-accent--dimmed);
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
