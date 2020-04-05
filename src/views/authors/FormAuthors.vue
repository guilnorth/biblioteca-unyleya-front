<template>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-text-field label="Nome*" required v-model="item.name"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-text-field
        type="number"
        label="Ano de nascimento*"
        required
        v-model="item.year_birth"
        hint="Exemplo: 1997 (AAAA)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="item.gender"
        :items="items"
        item-text="name"
        item-value="value"
        label="Sexo*"
        required
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-text-field
        label="Nacionalidade*"
        hint="Exemplo: Brasil"
        v-model="item.nationality"
        required
      ></v-text-field>
    </v-col>
    <!--  <v-col cols="12" sm="6">
      <v-autocomplete
        :items="[
          'Skiing',
          'Ice hockey',
          'Soccer',
          'Basketball',
          'Hockey',
          'Reading',
          'Writing',
          'Coding',
          'Basejump'
        ]"
        label="Interests"
        multiple
      ></v-autocomplete>
    </v-col> -->
  </v-row>
</template>

<script>
export default {
  name: "FormAuthors",
  props: ["item"],
  data() {
    return {
      select: {
        value: this.item.gender
        /* name: this.item.gender === "M" ? "Masculino" : "Feminino" */
      },
      items: [
        { name: "Masculino", value: "M" },
        { name: "Feminino", value: "F" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
