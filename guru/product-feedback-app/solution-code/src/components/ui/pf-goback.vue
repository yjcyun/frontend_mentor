<script setup>
import LeftIcon from "../../assets/shared/icon-arrow-left.svg?component";
</script>

<template>
  <pf-button mode="text" @click="$router.go(-1)">
    <template #icon><LeftIcon /></template>
    Go Back</pf-button
  >
</template>
