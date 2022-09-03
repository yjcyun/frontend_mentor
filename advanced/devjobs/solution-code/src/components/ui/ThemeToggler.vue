<template>
  <div class="toggle-switch">
    <img src="../../assets/desktop/icon-sun.svg" alt="Sun Icon" />
    <input
      type="checkbox"
      className="toggle-button"
      :checked="userTheme === 'dark'"
      @change="toggleTheme"
      title="theme-toggler"
      id="theme-toggler"
    />
    <img src="../../assets/desktop/icon-moon.svg" alt="Moon Icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userTheme: "dark",
    };
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");

      if (activeTheme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.setAttribute("data-color-theme", theme);
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-theme: dark)"
      ).matches;

      if (hasDarkPreference) return "dark";
      else return "light";
    },
  },

  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();

    this.setTheme(initUserTheme);
  },
};
</script>

<style scoped>
.toggle-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

input {
  -webkit-appearance: none;
  outline: none;
  width: 48px;
  height: 24px;
  background-color: var(--color-white);
  border-radius: 50px;
  position: relative;
  transition: 0.4s;
  padding: 5px;
  cursor: pointer;
}

input:before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50px;
  background-color: var(--color-violet);
  transition: 0.4s;
}

input:hover:before {
  background-color: var(--color-light-violet);
}

input:checked:before {
  transform: translate(170%);
  transition: 0.4s;
}
</style>
