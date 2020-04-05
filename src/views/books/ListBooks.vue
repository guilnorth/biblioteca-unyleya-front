<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="mb-4" color="primary" @click="onHandleItem">
        <v-icon left>mdi-plus-circle-outline</v-icon>
        Adicionar Livro
      </v-btn>
    </div>

    <v-row class="d-flex flex-wrap justify-flex-start">
      <!-- Component for Notification alert-->
      <NotificationBase :notification="notification" />
      <div class="">
        <CardBase
          iconCard="mdi-account-box"
          titleCard="Livro"
          v-if="loadingList"
        >
          <template v-slot:cardContent>
            <LoadingComponent
              color="#26c6da"
              :loading="true"
              type="sentences"
            />
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <LoadingComponent color="#26c6da" :loading="true" type="chip" />
              </div>
              <div class="d-flex">
                <LoadingComponent color="#26c6da" :loading="true" type="chip" />
              </div>
            </div>
          </template>
        </CardBase>
      </div>

      <div class="d-flex pa-6 " v-for="book in booksList" :key="book.id">
        <CardBase
          :onHandleClick="() => onHandleItem(book)"
          iconCard="mdi-book"
          titleCard="Livro"
        >
          <template v-slot:cardContent class="">
            <p class="text-center ma-0">{{ book.title }}</p>
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <v-icon>mdi-calendar</v-icon>
                <v-card-text>{{ book.year }}</v-card-text>
              </div>
            </div>
          </template>
        </CardBase>
      </div>
    </v-row>
  </div>
</template>

<script>
import LoadingComponent from "../../components/shared/LoadingComponent";
import CardBase from "../../components/base/CardBase";
import NotificationBase from "../../components/base/NotificationBase";
import { mapActions, mapState } from "vuex";
export default {
  name: "ListBooks",
  props: ["onItemEvent"],
  components: { CardBase, LoadingComponent, NotificationBase },
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState({
      booksList: state => state.books.list,
      loadingList: state => state.books.loadingOnList,
      notification: state => state.books.notification
    })
  },
  methods: {
    ...mapActions("books", ["getList", "resetDetail"]),
    onHandleItem: function(item) {
      if (item.id) return this.onItemEvent(item.id);
      else this.onItemEvent(0);
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
