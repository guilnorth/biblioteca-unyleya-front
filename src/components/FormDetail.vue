<template>
  <div>
    <div v-if="!isEdit && idItem">
      <slot name="detail"></slot>
      <v-col cols="12" sm="12" md="12">
        <v-btn color="primary" @click="isEdit = true"> Editar</v-btn>
        <v-btn class="ma-2" color="error" @click.stop="dialogDelete = true">
          Apagar
        </v-btn>
      </v-col>
    </div>
    <div v-if="isEdit || !idItem">
      <slot name="editForm"></slot>
      <div class="d-flex justify-sm-end align-end">
        <v-btn class="ma-2" color="warning" @click="onHandleCancel">
          Cancelar
        </v-btn>
        <v-btn class="ma-2" color="success" @click.stop="onHandleSave">
          Salvar
        </v-btn>
      </div>
    </div>

    <v-dialog v-model="dialogDelete" max-width="290">
      <v-card>
        <v-card-title class="headline">Apagar Registro?</v-card-title>

        <v-card-text>
          Deseja realmente apagar o registro?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialogDelete = false">
            Cancelar
          </v-btn>

          <v-btn color="green darken-1" text @click="onHandleDelete">
            Apagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormDetail",
  props: ["idItem"],
  data: () => ({
    isEdit: false,
    dialogDelete: false
  }),
  methods: {
    ...mapActions("modal", ["closeModal"]),
    onHandleSave: function() {
      this.$emit("on-save-form");
      this.isEdit = false;
    },
    onHandleDelete: function() {
      this.$emit("on-delete-form");
      this.dialogDelete = false;
    },
    onHandleCancel: function() {
      if (this.idItem) {
        this.isEdit = false;
      } else {
        this.closeModal();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
