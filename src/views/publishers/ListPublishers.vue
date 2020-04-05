<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="mb-4" color="primary" @click="onHandleItem">
        <v-icon left>mdi-plus-circle-outline</v-icon>
        Adicionar Editora
      </v-btn>
    </div>

    <div class="d-flex flex-wrap justify-flex-start">
      <!-- Component for Notification alert-->
      <NotificationBase :notification="notification" />
      <div class="">
        <CardBase
          iconCard="mdi-home-modern"
          titleCard="Editora"
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

      <div
        class="d-flex pa-6 "
        v-for="publisher in publishersList"
        :key="publisher.id"
      >
        <CardBase
          :onHandleClick="() => onHandleItem(publisher)"
          iconCard="mdi-home-modern"
          titleCard="Editora"
        >
          <template v-slot:cardContent>
            <p class="text-center ma-0">{{ publisher.name }}</p>
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
  name: "ListPublishers",
  props: ["onItemEvent"],
  components: { CardBase, LoadingComponent, NotificationBase },
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState({
      publishersList: state => state.publishers.list,
      loadingList: state => state.publishers.loadingOnList,
      notification: state => state.publishers.notification
    })
  },
  methods: {
    ...mapActions("publishers", ["getList"]),
    onHandleItem: function(item) {
      if (item.id) return this.onItemEvent(item.id);
      else this.onItemEvent(0);
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
