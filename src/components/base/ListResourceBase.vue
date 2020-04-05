<template>
  <div>
    <ListAuthors
      v-if="endpoint == 'authors'"
      :onItemEvent="emitEventOpenModal"
    />
    <ListGenres
      v-else-if="endpoint == 'genres'"
      :onItemEvent="emitEventOpenModal"
    />
    <ListPublishers
      v-else-if="endpoint == 'publishers'"
      :onItemEvent="emitEventOpenModal"
    />
    <ListBooks
      v-else-if="endpoint == 'books'"
      :onItemEvent="emitEventOpenModal"
    />
    <h1 v-else>
      Oh não 😢 <br />
      {{ endpoint || "Isso" }} parece não existir...
    </h1>
  </div>
</template>

<script>
import ListAuthors from "../../views/authors/ListAuthors";
import ListGenres from "../../views/genres/ListGenres";
import ListPublishers from "../../views/publishers/ListPublishers";
import ListBooks from "../../views/books/ListBooks";
export default {
  name: "ListResourceBase",
  props: ["endpoint"],
  components: {
    ListAuthors,
    ListGenres,
    ListPublishers,
    ListBooks
  },
  methods: {
    emitEventOpenModal: function(id) {
      this.$emit("open-detail", id);
    }
  }
};
</script>
