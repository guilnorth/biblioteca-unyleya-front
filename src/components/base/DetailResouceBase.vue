<template>
  <div>
    <DetailAuthors v-if="endpoint == 'authors'" />
    <DetailGenres v-else-if="endpoint == 'genres'" />
    <DetailPublishers v-else-if="endpoint == 'publishers'" />
    <DetailBooks v-else-if="endpoint == 'books'" />
    <h1 v-else>
      Oh não 😢 <br />
      {{ endpoint || "Isso" }} parece não existir...
    </h1>
  </div>
</template>

<script>
import DetailAuthors from "../../views/authors/DetailAuthors";
import DetailGenres from "../../views/genres/DetailGenres";
import DetailPublishers from "../../views/publishers/DetailPublishers";
import DetailBooks from "../../views/books/DetailBooks";
export default {
  name: "DetailResourceBase",
  props: ["endpoint"],
  components: {
    DetailAuthors,
    DetailGenres,
    DetailPublishers,
    DetailBooks
  }
};
</script>

<style lang="scss" scoped></style>
