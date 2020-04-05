<template>
  <div>
    <DetailAuthors v-if="endpoint == 'authors'" />
    <!-- <ListBooks
      v-if="endpoint == 'books'"
      :onItemEvent="emitEventOpenModal"
    /> -->
    <h1 v-else>
      Oh não 😢 <br />
      {{ endpoint || "Isso" }} parece não existir...
    </h1>
  </div>
</template>

<script>
import DetailAuthors from "../../views/authors/DetailAuthors";
export default {
  name: "DetailResourceBase",
  props: ["endpoint"],
  components: {
    DetailAuthors
  }
};
</script>

<style lang="scss" scoped></style>
