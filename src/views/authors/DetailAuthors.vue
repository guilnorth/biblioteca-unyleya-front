<template>
  <FormDetail>
    <template v-slot:detail>
      <h1>Detalhes</h1>
    </template>
    <template v-slot:editForm>
      <FormAuthors />
    </template>
  </FormDetail>
</template>

<script>
import FormDetail from "../../components/FormDetail";
import FormAuthors from "./FormAuthors";
export default {
  name: "DetailAuthors",
  components: { FormDetail, FormAuthors },
  data: () => ({
    isEdit: false
  }),
  methods: {
    goToEdit: function() {
      this.$router.push("/edit");
    }
  }
};
</script>

<style lang="scss" scoped></style>
