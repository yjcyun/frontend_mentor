<template>
  <TheForm>
    <template #header>
      <h2>New Invoice</h2>
    </template>

    <template #footer>
      <FormFooter mode="create" />
    </template>
  </TheForm>
</template>

<script>
import TheForm from "./TheForm.vue";
import FormFooter from "./FormFooter.vue";

export default { components: { TheForm, FormFooter } };
</script>
