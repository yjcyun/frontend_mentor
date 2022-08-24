<template>
  <div class="form-footer">
    <div class="form-footer__wrapper" :class="mode">
      <template v-if="mode === 'create'">
        <base-button type="button" mode="btn-3" @click="closeForm"
          >Discard</base-button
        >
        <div class="form-footer__flex">
          <base-button type="button" mode="btn-4" @click="saveAsDraft"
            >Save as Draft</base-button
          >
          <base-button type="submit" mode="btn-2">Save & Send</base-button>
        </div>
      </template>
      <template v-else>
        <div class="form-footer__flex">
          <base-button type="button" mode="btn-3" @click="closeForm">
            Cancel
          </base-button>
          <base-button type="submit" mode="btn-2">Save Changes</base-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode", "saveAsDraft"],
  data() {
    return {
      displayGradient: "",
    };
  },
  mounted() {
    this.scollbarHandler();
    window.addEventListener("resize", this.scollbarHandler);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.scollbarHandler);
  },
  methods: {
    scollbarHandler() {
      const element = document.querySelector(".form__body");
      if (element.scrollHeight > element.clientHeight) {
        this.displayGradient = "block";
      } else {
        this.displayGradient = "none";
      }
    },
    closeForm() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>

<style scoped>
.form-footer {
  background-color: var(--color-white);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.form-footer::before {
  display: block;
  content: "";
  height: 64px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 89px;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.form-footer__wrapper {
  display: flex;
  gap: 7px;
  padding: 21px 24px;
}

.form-footer__wrapper.create {
  justify-content: space-between;
}

.form-footer__wrapper.edit {
  justify-content: flex-end;
}

.form-footer__flex {
  display: flex;
  gap: 7px;
}

@media (min-width: 640px) {
  .form-footer {
    border-radius: 0px 20px 20px 0px;
    padding-left: 56px;
  }

  .form-footer::before {
    height: 200px;
    bottom: 51px;
  }

  .form-footer__wrapper {
    padding: 31px 56px 31px 0;
  }
}

@media (min-width: 960px) {
  .form-footer {
    padding-left: 159px;
  }
}
</style>
