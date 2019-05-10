<template>
  <div>
    <h2 class="subheading grey--text text--darken-2">Dashboard</h2>
    <v-container class="my-5">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="sortByProject" flat small dark v-on="on" class="mb-5 grey--text">
            <v-icon small left>folder</v-icon>
            <span class="text-lowercase">by project name</span>
          </v-btn>
        </template>
        <span>Sort by project name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="sortByPerson" v-on="on" flat small class="mb-5 grey--text">
            <v-icon small left>person</v-icon>
            <span class="text-lowercase">by person</span>
          </v-btn>
        </template>
        <span>Sort by person</span>
      </v-tooltip>

      <v-card
        flat
        v-for="(project, index) in projects"
        :key="index"
        :class="['project', project.status] "
      >
        <v-layout row wrap align-center class="pa-3">
          <v-flex md6 xs12>
            <div class="caption grey--text text-capitalize">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex md2 sm4 xs6>
            <div class="caption grey--text text-capitalize">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex md2 sm4 xs6>
            <div class="caption grey--text text-capitalize">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex md2 sm4 xs4>
            <div class="right">
              <v-chip class="status white--text" small right flat round>{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    }
  },
  methods: {
    ...mapActions(["sortByProject", "sortByPerson"])
  }
};
</script>

<style lang="scss" scoped>
.ongoing {
  &.project {
    border-left: 4px solid palevioletred;
  }

  & .status {
    background: palevioletred;
  }
}
.complete {
  &.project {
    border-left: 4px solid yellowgreen;
  }
  & .status {
    background: yellowgreen;
  }
}

.overdue {
  &.project {
    border-left: 4px solid orangered;
  }
  & .status {
    background: orangered;
  }
}
</style>