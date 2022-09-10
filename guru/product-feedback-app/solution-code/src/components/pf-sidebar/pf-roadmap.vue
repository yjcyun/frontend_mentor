<script setup>
const props = defineProps({
  status: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <pf-card>
    <div class="pf-roadmap">
      <div class="pf-roadmap--flex">
        <h3>Roadmap</h3>
        <router-link to="/roadmap">View</router-link>
      </div>
      <ul>
        <li class="pf-roadmap--flex" v-for="stat in status" :key="stat.label">
          <div class="stat-name">
            <div class="dot" :class="stat.label.toLowerCase()"></div>
            <p>{{ stat.label }}</p>
          </div>
          <p class="count">{{ stat.count }}</p>
        </li>
      </ul>
    </div>
  </pf-card>
</template>

<style lang="scss" scoped>
.pf-roadmap {
  padding: 20px 24px 24px;

  h3 {
    color: var(--color-bright-navy);
  }

  a {
    color: var(--color-dark-navy);
  }

  .pf-roadmap--flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    margin-top: 24px;

    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }

      .stat-name {
        display: flex;
        align-items: center;

        .dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-salmon);
          border-radius: 50%;
          margin-right: 16px;

          &.in-progress {
            background-color: var(--color-magenta);
          }

          &.live {
            background-color: var(--color-sky-blue);
          }
        }
      }

      .count {
        font-weight: 700;
      }
    }
  }
}
</style>
