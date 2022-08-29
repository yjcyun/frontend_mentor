<template>
  <form class="filter">
    <div class="filter-col">
      <BaseInput :icon="icon.search" :placeholder="searchPlaceholder" />
    </div>

    <!-- Desktop -->
    <div class="filter-col filter-location">
      <BaseInput :icon="icon.location" placeholder="Filter by location…" />
    </div>

    <div class="filter-col filter-submit">
      <BaseCheckbox :label="checkboxLabel" />
      <BaseButton mode="primary" type="submit">Search</BaseButton>
    </div>

    <!-- Mobile -->
    <div class="filter-mobile-col">
      <button class="filter-mobile-filter">
        <img src="../../assets/mobile/icon-filter.svg" alt="Filter Icon" />
      </button>
      <BaseButton class="filter-mobile-search">
        <img src="../../assets/desktop/icon-search.svg" alt="Search Icon" />
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { computed } from "vue";

import BaseInput from "./BaseInput.vue";
import Search from "../../assets/desktop/icon-search.svg";
import Location from "../../assets/desktop/icon-location.svg";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseButton from "./BaseButton.vue";

import useWindowSize from "../../hooks/useWindowSize";

export default {
  components: { BaseInput, BaseCheckbox, BaseButton },
  data() {
    return {
      icon: { search: Search, location: Location },
    };
  },
  setup() {
    const { windowWidth } = useWindowSize();
    const checkboxLabel = computed(() => {
      if (windowWidth.value > 996) {
        return "Full Time Only";
      }
      return "Full Time";
    });

    const searchPlaceholder = computed(() => {
      if (windowWidth.value > 996) {
        return "Filter by title, companies, expertise…";
      }
      return "Filter by title...";
    });

    return { checkboxLabel, searchPlaceholder };
  },
};
</script>

<style scoped>
.filter {
  background-color: var(--card-bg);
  border-radius: 6px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 0;
  justify-content: space-between;
}

.filter-col {
  height: 100%;
  width: 100%;
  padding-left: 24px;
  align-items: center;
}

.filter-col:not(:first-of-type) {
  display: none;
}

.filter-location {
  display: none;
}

.filter-submit {
  display: flex;
}

.filter-mobile-col {
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: flex-end;
}

.filter-mobile-search {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  padding: 0;
  align-items: center;
}

.filter-mobile-search img {
  filter: brightness(10);
  width: 20px;
  height: 20px;
}

.filter-mobile-filter {
  background-color: transparent;
  flex-shrink: 0;
  cursor: pointer;
}

.filter-mobile-filter img {
  width: 20px;
  height: 20px;
}

@media (min-width: 768px) {
  .filter {
    padding: 0 16px 0 8px;
  }

  .filter-col:not(:first-of-type) {
    display: flex;
  }
  .filter-location {
    display: flex;
  }

  .filter-mobile-col {
    display: none;
  }
}
</style>
