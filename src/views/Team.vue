<template>
  <div>
    <h2 class="subheading grey--text text--darken-2">Team</h2>
    <v-container class="mt-5">
      <v-layout row wrap>
        <v-flex v-for="(team, index) in teams" :key="index" class="xs6 md4 lg3">
          <v-card flat text-xs-center class="ma-3">
            <v-responsive class="text-xs-center pt-4">
              <v-avatar size="100px" class="grey">
                <img :src="team.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-title>
              <div class="text-capitalize ma-auto text-xs-center">
                <h3>{{team.name}}</h3>
                <p class="grey--text">{{team.role}}</p>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn class="grey--text" small flat>
                <v-icon small left>message</v-icon>
                <span class="text-uppercase">message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    teams() {
      return this.$store.getters.getTeams;
    }
  }
};
</script>

<style>
</style>
