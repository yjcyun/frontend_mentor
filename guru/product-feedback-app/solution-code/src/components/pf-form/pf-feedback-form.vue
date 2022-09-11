<script setup>
import PfFormIcon from "./pf-form-icon.vue";
import PfInput from "../ui/pf-input.vue";
import PfSelect from "./pf-select.vue";

const props = defineProps({
  formTitle: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    validator: function (value) {
      return ["add", "edit"].indexOf(value) !== -1;
    },
  },
});
</script>

<template>
  <pf-card>
    <div class="pf-feedback-form">
      <pf-form-icon :mode="mode" />

      <h1>{{ formTitle }}</h1>

      <form class="form">
        <div class="form-control">
          <label for="title" class="input-label h4">Feedback Title</label>
          <p class="input-description">Add a short, descriptive headline</p>
          <pf-input type="text" id="title" />
        </div>

        <div class="form-control">
          <label for="category" class="input-label h4">Category</label>
          <p class="input-description">Choose a category for your feedback</p>
          <pf-select
            :options="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
            id="category"
          />
        </div>

        <div class="form-control">
          <label for="status" class="input-label h4">Update Status</label>
          <p class="input-description">Change feature state</p>
          <pf-select
            :options="['Suggestion', 'Planned', 'In-Progress', 'Live']"
            id="status"
          />
        </div>

        <div class="form-control">
          <label for="details" class="input-label h4">Feedback Detail</label>
          <p class="input-description">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <pf-textarea id="details" height="96px" />
        </div>

        <div class="form-cta">
          <pf-button mode="error">Delete</pf-button>
          <div class="form-cta--right">
            <pf-button mode="tertiary">Cancel</pf-button>
            <pf-button>Add Feedback</pf-button>
          </div>
        </div>
      </form>
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-feedback-form {
  position: relative;
  padding: 52px 42px 40px;
  margin-top: 68px;

  .form {
    margin-top: 40px;

    .form-control {
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;

      .input-description {
        margin: 2px 0 16px;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .form-cta {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;

      .form-cta--right {
        display: flex;
        gap: 16px;
      }
    }
  }
}
</style>
