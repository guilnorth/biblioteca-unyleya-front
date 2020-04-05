<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item v-for="menu in itemsMenu" :key="menu.title" :to="menu.link">
        <v-list-item-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: true,
    itemsMenu: [
      { title: "Livros", link: "/books", icon: "mdi-book-multiple" },
      { title: "Autores", link: "/authors", icon: "mdi-account-box" },
      { title: "Editoras", link: "/publishers", icon: "mdi-home-modern" },
      { title: "Gêneros", link: "/genres", icon: "mdi-palette" }
    ]
  })
};
</script>
