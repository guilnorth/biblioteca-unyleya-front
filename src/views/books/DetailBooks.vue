<template>
  <FormDetail
    @on-save-form="onHandleSave"
    @on-delete-form="onHandleDelete"
    :idItem="detail.id"
  >
    <template v-slot:detail>
      <div class="d-flex flex-row  flex-wrap my-1">
        <div class="d-flex align-center">
          <v-icon>mdi-book</v-icon>
          <p class="pl-1  pt-4 ">{{ detail.title }}</p>
        </div>
        <div class="d-flex flex-column my-1 mx-auto">
          <p class="font-weight-medium mb-1 pb-0">
            Ano
          </p>
          {{ detail.year }}
        </div>
      </div>

      <div class="d-flex flex-column">
        <v-divider />
        <div class="d-flex align-center">
          <v-icon>mdi-account-box-outline</v-icon>
          <p class="pl-1 font-weight-medium pt-4 ">Autor</p>
        </div>

        <div class="d-flex flex-row justify-space-between flex-wrap my-1">
          <div class="d-flex flex-column my-2">
            <p class="font-weight-medium mb-1 pb-0">Nome</p>
            {{ detail.author.name }}
          </div>

          <div class="d-flex flex-column my-1">
            <p class="font-weight-medium mb-1 pb-0">
              Nascimento
            </p>
            {{ detail.author.year_birth }}
          </div>
          <div class="d-flex flex-column my-1">
            <p class="font-weight-medium mb-1 pb-0">Gênero</p>
            {{ detail.author.gender === "F" ? "Feminino" : "Masculino" }}
          </div>

          <div class="d-flex flex-column my-1">
            <p class="font-weight-medium mb-1 pb-0">
              Nacionalidade
            </p>
            {{ detail.author.nationality }}
          </div>
        </div>
      </div>

      <div class="d-flex flex-column">
        <v-divider />
        <div class="d-flex align-center">
          <v-icon>mdi-information-outline</v-icon>
          <p class="pl-1 font-weight-medium pt-4 ">Informações</p>
        </div>

        <div class="d-flex flex-row flex-wrap my-1">
          <div class="d-flex flex-column my-2">
            <p class="font-weight-medium mb-1 pb-0">Editora</p>
            {{ detail.publisher.name }}
          </div>
          <div class="d-flex flex-column my-2 mx-auto">
            <p class="font-weight-medium mb-1 pb-0">Gênero</p>
            {{ detail.genre.name }}
          </div>
        </div>
      </div>
    </template>
    <template v-slot:editForm>
      <FormBooks :item="detail" />
    </template>
  </FormDetail>
</template>

<script>
import FormDetail from "../../components/FormDetail";
import FormBooks from "./FormBooks";
import { mapActions, mapState } from "vuex";
export default {
  name: "DetailBooks",
  components: { FormDetail, FormBooks },
  data: () => ({}),
  mounted() {
    const id = parseInt(this.$router.currentRoute.params.id);
    if (id && id !== "undefined") this.getOne({ id });
    else this.resetDetail();
  },
  computed: {
    ...mapState({
      detail: state => state.books.detail
    })
  },
  methods: {
    ...mapActions("books", [
      "getOne",
      "save",
      "update",
      "delete",
      "resetDetail"
    ]),
    ...mapActions("modal", ["closeModal"]),
    onHandleSave: function() {
      if (this.detail.id)
        this.update({ id: this.detail.id, data: this.detail });
      else this.save({ data: this.detail });
    },
    onHandleDelete: function() {
      if (this.detail.id) this.delete({ id: this.detail.id });
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped></style>
