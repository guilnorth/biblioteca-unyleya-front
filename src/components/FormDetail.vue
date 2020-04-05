<template>
  <div>
    <v-row v-if="!isEdit">
      <slot name="detail"></slot>
      <v-col cols="12" sm="12" md="12">
        <v-btn @click="isEdit = true"> Editar</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="isEdit" >
      <slot name="editForm"></slot>
      <v-btn @click="isEdit = false"> Cancelar</v-btn>
      <v-btn> Editar</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormDetail",
  //props:['endpoint'],
  data: () => ({
    isEdit: false
  }),
  methods: {}
};
</script>

<style lang="scss" scoped></style>
