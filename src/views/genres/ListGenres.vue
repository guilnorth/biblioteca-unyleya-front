<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="mb-4" color="primary" @click="onHandleItem">
        <v-icon left>mdi-plus-circle-outline</v-icon>
        Adicionar Gênero
      </v-btn>
    </div>

    <div class="d-flex flex-wrap justify-flex-start">
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
                <LoadingComponent color="#26c6da" :loading="true" type="chip" />
              </div>
            </div>
          </template>
        </CardBase>
      </div>

      <div class="d-flex pa-6 " v-for="genre in genresList" :key="genre.id">
        <CardBase
          :onHandleClick="() => onHandleItem(genre)"
          iconCard="mdi-palette"
          titleCard="Gênero"
        >
          <template v-slot:cardContent>
            <p class="text-center ma-0">{{ genre.name }}</p>
            <!-- <div class="d-flex justify-space-between pa-6">
            <div class="d-flex">
              <v-icon>mdi-earth</v-icon>
              <v-card-text>{{ genre.nationality }}</v-card-text>
            </div>
            <div class="d-flex">
              <v-icon>mdi-calendar</v-icon>
              <v-card-text>{{ genre.year_birth }}</v-card-text>
            </div>
          </div> -->
          </template>
        </CardBase>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponent from "../../components/shared/LoadingComponent";
import NotificationBase from "../../components/base/NotificationBase";
import CardBase from "../../components/base/CardBase";
import { mapActions, mapState } from "vuex";
export default {
  name: "ListGenres",
  props: ["onItemEvent"],
  components: { CardBase, LoadingComponent, NotificationBase },
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState({
      genresList: state => state.genres.list,
      loadingList: state => state.genres.loadingOnList,
      notification: state => state.genres.notification
    })
  },
  methods: {
    ...mapActions("genres", ["getList"]),
    onHandleItem: function(item) {
      if (item.id) return this.onItemEvent(item.id);
      else this.onItemEvent(0);
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
