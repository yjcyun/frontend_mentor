<script setup>
import NewFeedbackIcon from "../../assets/shared/icon-new-feedback.svg?component";
import EditFeedbackIcon from "../../assets/shared/icon-edit-feedback.svg?component";

const props = defineProps({
  mode: {
    type: String,
    validator: function (value) {
      return ["add", "edit"].indexOf(value) !== -1;
    },
  },
});
</script>

<template>
  <div class="pf-form-icon">
    <NewFeedbackIcon v-if="mode === 'add'" />
    <EditFeedbackIcon v-else-if="mode === 'edit'" />
  </div>
</template>

<style lang="scss" scoped>
.pf-form-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: -28px;
}
</style>
