<template>
  <div>
    <ListAuthors
      v-if="endpoint == 'authors'"
      :onItemEvent="emitEventOpenModal"
    />
    <!-- <ListBooks
      v-if="endpoint == 'books'"
      :onItemEvent="emitEventOpenModal"
    /> -->
    <h1 v-else>Oh não 😢 <br/> {{endpoint || 'Isso'}} parece não existir...</h1>
  </div>
</template>

<script>
import ListAuthors from "../../views/authors/ListAuthors";
export default {
  name: "ListResourceBase",
  props: ["endpoint"],
  components: {
    ListAuthors
  },
  methods: {
    emitEventOpenModal: function(id) {
      this.$emit("open-detail", id);
    }
  }
};
</script>
