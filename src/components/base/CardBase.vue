<template>
  <v-card
    class="mx-auto"
    color="#4DD0E1"
    dark
    max-width="400"
    @click="onHandleClick()"
  >
    <v-card-title style="background:#1976D2" class="pa-4">
      <v-list-item-avatar color="primary darken-3" class="mr-4 ml-0">
        <v-icon color="white dark" style="">
          {{ iconCard }}
        </v-icon>
      </v-list-item-avatar>
      <span class="title font-weight-light text-right pb-0">
        {{ titleCard }}
      </span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold pa-4">
      <slot name="cardContent"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardBase",
  props: {
    onHandleClick: {
      type: Function,
      required: false,
      default: function() {}
    },
    colorCard: {
      type: String,
      required: false,
      default: "#26c6da"
    },
    titleCard: {
      type: String,
      required: false,
      default: "Livro"
    },
    iconCard: {
      type: String,
      required: false,
      default: "mdi-book-multiple"
    }
  }
};
</script>

<style lang="scss" scoped></style>
