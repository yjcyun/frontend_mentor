<script setup>
import { ref } from "vue";

const textareaValue = ref("");

const addComment = () => {
  console.log("form submit");
  textareaValue.value = "";
};
</script>

<template>
  <pf-card>
    <div class="pf-add-comment">
      <h3>Add Comment</h3>
      <form @submit.prevent="addComment">
        <pf-textarea
          class="form-body"
          v-model="textareaValue"
          placeholder="Type your comment here"
        />
        <div class="form-footer">
          <p class="body2">{{ 225 - textareaValue.length }} characters left</p>
          <pf-button>Post Comment</pf-button>
        </div>
      </form>
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-add-comment {
  padding: 24px 32px 32px;

  .form-body {
    margin: 24px 0 16px;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
