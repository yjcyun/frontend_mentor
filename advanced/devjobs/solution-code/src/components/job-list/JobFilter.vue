<template>
  <div>
    <!-- Mobile View -->
    <JobFilterModal v-if="showModal" @close="closeModal">
      <form @submit.prevent="filterJobs">
        <fieldset>
          <legend hidden>Filter Jobs</legend>
          <div class="form-control--mobile">
            <BaseInput
              :icon="icon.location"
              placeholder="Filter by location…"
              v-model="location"
            />
          </div>
          <div class="form-control--mobile">
            <BaseCheckbox :label="checkboxLabel" v-model="isFullTime" />
          </div>
        </fieldset>

        <div class="form-control--mobile">
          <BaseButton mode="primary" type="submit">Search</BaseButton>
        </div>
      </form>
    </JobFilterModal>

    <!-- Desktop View -->
    <form
      @submit.prevent="filterJobs"
      class="filter"
      v-on:change="saveFormDataState"
    >
      <fieldset>
        <legend hidden>Filter Jobs</legend>
        <div class="filter-col">
          <BaseInput
            :icon="icon.search"
            :placeholder="searchPlaceholder"
            v-model="title"
          />
        </div>

        <!-- Desktop -->
        <div class="filter-col filter-location">
          <BaseInput
            :icon="icon.location"
            placeholder="Filter by location…"
            v-model="location"
          />
        </div>

        <div class="filter-col filter-submit">
          <BaseCheckbox :label="checkboxLabel" v-model="isFullTime" />
          <BaseButton mode="primary" type="submit">Search</BaseButton>
        </div>

        <!-- Mobile -->
        <div class="filter-mobile-col">
          <button class="filter-mobile-filter" @click="openModal" type="button">
            <img src="../../assets/mobile/icon-filter.svg" alt="Filter Icon" />
          </button>
          <BaseButton class="filter-mobile-search">
            <img src="../../assets/desktop/icon-search.svg" alt="Search Icon" />
          </BaseButton>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Search from "../../assets/desktop/icon-search.svg";
import Location from "../../assets/desktop/icon-location.svg";

import BaseButton from "../ui/BaseButton.vue";
import BaseCheckbox from "../ui/BaseCheckbox.vue";
import BaseInput from "../ui/BaseInput.vue";

import useWindowSize from "../../hooks/useWindowSize";
import JobFilterModal from "./JobFilterModal.vue";

export default {
  components: { BaseInput, BaseCheckbox, BaseButton, JobFilterModal },
  data() {
    return {
      icon: {
        search: Search,
        location: Location,
      },
    };
  },
  setup() {
    const { windowWidth } = useWindowSize();

    // Render different text for mobile and desktop views
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

    // Controlled Inputs & Submitting form
    const title = ref("");
    const location = ref("");
    const isFullTime = ref(false);
    const showModal = ref(false);

    const store = useStore();

    const filterJobs = () => {
      store.dispatch("filterJobs", {
        title: title.value,
        location: location.value,
        isFullTime: isFullTime.value,
      });
      showModal.value = false;
      store.dispatch("setFilteredJobs", {
        data: store.getters.getFilteredJobs,
        count: store.getters.getLoadMoreForm,
      });
      store.dispatch("resetLoadValues");
    };

    // This allows to persist form data when browser leaves the page.
    // Get form data in session storage
    const initFormDataState = () => {
      const formData = JSON.parse(sessionStorage.getItem("formData"));
      if (formData) {
        title.value = formData.title;
        location.value = formData.location;
        isFullTime.value = formData.isFullTime;
      }
    };

    // Save form data on form change
    const saveFormDataState = () => {
      const formData = JSON.stringify({
        title: title.value,
        location: location.value,
        isFullTime: isFullTime.value,
      });
      sessionStorage.setItem("formData", formData);
    };

    // Get form data from session storage when component is created
    initFormDataState();

    // Remove sessionStorage on page reload
    window.onbeforeunload = () => {
      sessionStorage.removeItem("formData");
    };

    // Control filter modal in mobile view

    const openModal = () => {
      showModal.value = true;
    };

    // Emit modal close event
    const closeModal = () => {
      showModal.value = false;
    };

    return {
      checkboxLabel,
      searchPlaceholder,
      filterJobs,
      title,
      location,
      isFullTime,
      saveFormDataState,
      openModal,
      showModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.filter fieldset {
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
  gap: 26px;
}

.filter-mobile-col {
  display: flex;
  gap: 24px;
  width: fit-content;
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

.form-control--mobile {
  padding: 24px;
}

.form-control--mobile:first-child {
  border-bottom: 2px solid rgba(110, 128, 152, 0.2);
}

.form-control--mobile:last-child {
  padding: 0 24px 24px 24px;
}

.form-control--mobile:last-child button {
  max-width: 100%;
}

@media (min-width: 768px) {
  .filter fieldset {
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
