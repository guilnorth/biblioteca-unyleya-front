<template>
  <v-col v-if="loading">
    <v-sheet :color="color" :class="sheetClass">
      <v-skeleton-loader
        class="mx-auto"
        :max-width="width"
        :type="type"
      ></v-skeleton-loader>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "card"
    },
    sheetClass: {
      type: String,
      default: "px-3 pt-3 pb-3"
    },
    width: {
      type: Number,
      default: 400
    },
    color: {
      type: String,
      default: "lighten-4"
    }
  }
};
</script>
