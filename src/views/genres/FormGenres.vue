<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <v-text-field label="Nome*" required v-model="item.name"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FormGenres",
  props: ["item"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
