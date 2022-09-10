<template>
  <div class="pf-reply">
    <textarea name="" id=""></textarea>
    <pf-button>Post Reply</pf-button>
  </div>
</template>
<style lang="scss" scoped>
.pf-reply {
  display: flex;
  gap: 16px;

  textarea {
    height: 80px;
    width: 100%;
    resize: none;
  }

  button {
    align-self: flex-start;
  }
}
</style>
