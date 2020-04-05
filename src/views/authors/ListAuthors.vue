<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="mb-4" color="primary" @click="onHandleItem">
        <v-icon left>mdi-plus-circle-outline</v-icon>
        Adicionar Autor
      </v-btn>
    </div>

    <v-row class="d-flex flex-wrap justify-flex-start">
      <!-- Component for Notification alert-->
      <NotificationBase :notification="notification" />
      <div class="">
        <CardBase
          iconCard="mdi-account-box"
          titleCard="Autor"
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
                <v-icon>mdi-earth</v-icon>
                <LoadingComponent color="#26c6da" :loading="true" type="chip" />
              </div>
              <div class="d-flex">
                <v-icon>mdi-calendar</v-icon>
                <LoadingComponent color="#26c6da" :loading="true" type="chip" />
              </div>
            </div>
          </template>
        </CardBase>
      </div>

      <div class="d-flex pa-6 " v-for="author in authorsList" :key="author.id">
        <CardBase
          :onHandleClick="() => onHandleItem(author)"
          iconCard="mdi-account-box"
          titleCard="Autor"
        >
          <template v-slot:cardContent>
            <p class="text-center ma-0">{{ author.name }}</p>
            <div class="d-flex justify-space-between pa-6">
              <div class="d-flex">
                <v-icon>mdi-earth</v-icon>
                <v-card-text>{{ author.nationality }}</v-card-text>
              </div>
              <div class="d-flex">
                <v-icon>mdi-calendar</v-icon>
                <v-card-text>{{ author.year_birth }}</v-card-text>
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
  name: "ListAuthors",
  props: ["onItemEvent"],
  components: { CardBase, LoadingComponent, NotificationBase },
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState({
      authorsList: state => state.authors.list,
      loadingList: state => state.authors.loadingOnList,
      notification: state => state.authors.notification
    })
  },
  methods: {
    ...mapActions("authors", ["getList", "resetDetail"]),
    onHandleItem: function(item) {
      if (item.id) return this.onItemEvent(item.id);
      else this.onItemEvent(0);
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
