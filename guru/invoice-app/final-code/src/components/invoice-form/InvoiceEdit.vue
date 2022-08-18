<template>
  <TheForm>
    <template #header>
      <h2>Edit <span>#</span>UID</h2>
    </template>

    <template #footer>
      <FormFooter mode="edit" />
    </template>
  </TheForm>
</template>

<script>
import TheForm from "./TheForm.vue";
import FormFooter from "./FormFooter.vue";

export default { components: { TheForm, FormFooter } };
</script>
