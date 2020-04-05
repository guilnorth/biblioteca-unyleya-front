<template>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-text-field
        label="Título*"
        required
        v-model="item.title"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-text-field
        type="number"
        label="Ano de publicação*"
        required
        v-model="item.year"
        hint="Exemplo: 1997 (AAAA)"
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6">
      <v-select
        v-model="item.author_id"
        :items="authorsList"
        item-text="name"
        item-value="id"
        label="Autor*"
        required
      />
    </v-col>

    <v-col cols="12" sm="6">
      <v-select
        v-model="item.genre_id"
        :items="genresList"
        item-text="name"
        item-value="id"
        label="Gênero*"
        required
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="item.publisher_id"
        :items="publishersList"
        item-text="name"
        item-value="id"
        label="Editora*"
        required
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "FormBooks",
  props: ["item"],
  mounted() {
    /**
     *
     */
    this.getListAuthors();
    this.getListGenres();
    this.getListPublishers();
  },
  computed: {
    ...mapState({
      authorsList: state => state.authors.list,
      genresList: state => state.genres.list,
      publishersList: state => state.publishers.list
    })
  },
  methods: {
    ...mapActions({
      getListAuthors: "authors/getList",
      getListGenres: "genres/getList",
      getListPublishers: "publishers/getList"
    })
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
