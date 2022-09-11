<script setup>
import { ref } from "vue";
import PfReply from "./pf-reply.vue";

const doesReply = ref(false);

const replyToComment = () => {
  doesReply.value = true;
};
</script>

<template>
  <div class="pf-comment">
    <img
      src="../../assets/user-images/image-elijah.jpg"
      alt=""
      class="pf-comment--avatar"
    />
    <div>
      <div class="pf-comment--header">
        <div>
          <h4 class="name">Elijah Moss</h4>
          <p class="username">@hexagon.bestagon</p>
        </div>
        <p class="body3 cta" @click="replyToComment">Reply</p>
      </div>
      <p class="body2">
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
      </p>
      <pf-reply v-if="doesReply"></pf-reply>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pf-comment {
  display: flex;
  gap: 32px;
  padding: 32px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  }

  .pf-comment--avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .pf-comment--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;

    .name {
      color: var(--color-bright-navy);
    }

    .username {
      font-size: 14px;
    }

    .cta {
      color: var(--color-blue);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
