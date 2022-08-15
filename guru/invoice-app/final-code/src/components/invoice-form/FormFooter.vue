<template>
  <div class="form-footer">
    <div class="form-footer__wrapper" :class="mode">
      <template v-if="mode === 'create'">
        <base-button type="button" mode="btn-3">Discard</base-button>
        <div class="form-footer__flex">
          <base-button type="button" mode="btn-4">Save as Draft</base-button>
          <base-button type="submit" mode="btn-2">Save & Send</base-button>
        </div>
      </template>
      <template v-else>
        <div class="form-footer__flex">
          <base-button type="button" mode="btn-3">Cancel</base-button>
          <base-button type="submit" mode="btn-2">Save Changes</base-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
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
      const element = document.querySelector(".form__wrapper");
      if (element.scrollHeight > element.clientHeight) {
        this.displayGradient = "block";
      } else {
        this.displayGradient = "none";
      }
    },
  },
};
</script>

<style scoped>
.form-footer {
  padding-left: 103px;
  border-radius: 0px 20px 20px 0px;
  background-color: var(--color-white);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.form-footer::before {
  display: v-bind(displayGradient);
  content: "";
  height: 200px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 51px;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.form-footer__wrapper {
  padding: 31px;
  display: flex;
}

.form-footer__wrapper.create {
  justify-content: space-between;
}

.form-footer__wrapper.edit {
  justify-content: flex-end;
}

.form-footer__flex {
  display: flex;
  gap: 8px;
}
</style>
