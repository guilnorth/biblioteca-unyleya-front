<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')" />
    <v-toolbar-title>Biblioteca</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({})
};
</script>
