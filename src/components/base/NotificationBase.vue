<template>
  <v-snackbar
    v-model="notification.show"
    :color="notification.type"
    multi-line="multi-line"
    :top="true"
    :timeout="6000"
  >
    {{ notification.message }}
    <v-btn dark text @click="notification.show = false">Fechar</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "NotificationBase",
  props: ["notification"]
};
</script>

<style lang="scss" scoped></style>
